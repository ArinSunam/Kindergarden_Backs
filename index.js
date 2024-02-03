const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const cors = require('cors');
const teacherRoutes = require('./routes/teacherRoutes');
const fileUpload = require('express-fileupload');
const classesRoutes = require('./routes/classesRoutes');



mongoose.connect('mongodb+srv://meow:hyamuji36@cluster0.krfewya.mongodb.net/kindergarden').then((result) => {
  app.listen(port, () => {
    console.log('listening');
  });
}).catch((err) => {
  console.log(err);
})

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  abortOnLimit: true,
}));


app.use(teacherRoutes);
app.use(classesRoutes);

app.use((req, res) => {
  return res.status(404).json('not found')
})

