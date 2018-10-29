const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  creationDate: { type: Date, required: true },
  creationUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updatedDate: { type: Date }
});

module.exports = mongoose.model('Plan', planSchema);