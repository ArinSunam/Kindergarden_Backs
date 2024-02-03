const express = require('express');
const router = express.Router();
const { getClasses, getSingleClass, addClass } = require('../controllers/classesController');
const { fileCheck } = require('../middlewares/file_check');

const notAllowed = (req, res) => res.status(405).json('method not allowed');

router.route('/api/classes').get(getClasses).all(notAllowed);
router.route('/api/class/:id').get(getSingleClass).all(notAllowed);

router.route('/api/add-class').post(fileCheck, addClass).all(notAllowed);

module.exports = router;