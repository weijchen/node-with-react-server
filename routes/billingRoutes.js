const keys        = require('../config/keys'),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose"),
      stripe      = require('stripe')(keys.stripeSecretKey)

const User            = mongoose.model('User')

module.exports = app => {
  const calculateOrderAmount = items => {
    return 500;
  };

  app.post('/api/payments', bodyParser.raw({type: 'application/json'}), async (req, res) => {
    let event;

    try {
      event = {type: "payment_intent.succeeded"};
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }

    const { items } = req.body;

    if (req.body.userId == '') {
      console.log("hi");
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'usd',
        metadata: { user: req.user.id },
      });
      
      res.send({
        clientSecret: paymentIntent.client_secret,
        paymentIntent: paymentIntent
      })
    } else {
      const user = await User.findById(req.body.userId).exec();
      user.credits += 5;
      await user.save();
    }
  });
};