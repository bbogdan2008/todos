const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: { type: String, required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  dueDate: { type: Date },
  creationDate: { type: Date },
  creationUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Todo', todoSchema);