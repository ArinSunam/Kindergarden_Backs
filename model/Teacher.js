

const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true
  }
},
  { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher