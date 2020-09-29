const mongoose   = require('mongoose'),
      { Schema } = mongoose

const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  subject: String,
  title: String,
  body: String,
  signature: String,

  // subdocument collection: only connect to a single survey
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },

  // reference field
  _user: { type: Schema.Types.ObjectId, ref: 'User'},

  dateSent: Date,
  lastResponded: Date

  // TODO: place for customized redirect html
});

mongoose.model('surveys', surveySchema);
