

const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  teacher: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Teacher',
  },
  price: {
    type: String,

  },
  age: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Classes = mongoose.model('Classes', classSchema);

module.exports = Classes;