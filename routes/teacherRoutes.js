const express = require('express');
const router = express.Router();
const { getAllTeachers, getTeacher, addTeachers } = require('../controllers/teacherController');
const { fileCheck } = require('../middlewares/file_check')

const notAllowed = (req, res) => res.status(405).json('method not allowed');

// Dashboard
router.route('/').get((req, res) => {
  return res.status(200).json('Welcome to Sahils kindergarden');
}).all(notAllowed);

router.route('/api/teachers').get(getAllTeachers).all(notAllowed);
router.route('/api/teacher/:id').get(getTeacher).all(notAllowed);
router.route('/api/add-teacher').post(fileCheck, addTeachers).all(notAllowed);

module.exports = router;