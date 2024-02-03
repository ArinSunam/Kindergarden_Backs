const path = require('path');
const fs = require('fs');

module.exports.fileCheck = (req, res, next) => {
  if (!req.files?.photo) {
    return res.status(400).json('Please provide image');
  } else {
    const file = req.files?.photo;
    const exts = ['.png', '.jpeg', '.jpg'];
    const filePath = path.extname(file.name);
    if (exts.includes(filePath)) {
      file.mv(`./uploads/${file.name}`, (err) => {

      });

      req.imagePath = `/uploads/${file.name}`;
      next();
    } else {
      return res.status(400).json('please provide valid image');
    }
  }
}