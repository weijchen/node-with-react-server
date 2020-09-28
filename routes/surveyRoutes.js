const mongoose        = require('mongoose'),
      _               = require('lodash'),
      { Path }        = require('path-parser'),
      { URL }         = require('url'), // default in node.js
      requireLogin    = require("../middlewares/requireLogin"),
      requireCredit   = require("../middlewares/requireCredit"),
      Mailer          = require("../services/Mailer");
      surveyTemplate  = require("../services/emailTemplates/surveyTemplate");

const Survey          = mongoose.model("surveys");

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false});

    res.send(surveys);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys/webhooks", (req, res) => { // no need to respond to sendgrid -> no need to assign 'async'
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')  // deal with unique surveyId
      .each(({ surveyId, email, choice }) => {    // run on each event
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false}
          }
        }, {
          $inc: { [choice]: 1 },  // increment
          $set: { 'recipients.$.responded': true },  // set find($) in recipients' responded
          lastResponded: new Date()
        }).exec();  // execute and send to the database
      })
      .value();

    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredit, async (req, res) => {
    const { title, subject, body, recipients} = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),   // email => { return { email: email}}
      _user: req.user.id,  // generated by mongoose
      dateSent: Date.now(),
    });

    // Create and send email (create email generation helper (mailer) and pass to 3rd party email provider)
    // Email sent successfully?
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();

      // Save survey
      await survey.save();
      
      // handle user's credits
      req.user.credits -= 1;
      const user = await req.user.save();
  
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};