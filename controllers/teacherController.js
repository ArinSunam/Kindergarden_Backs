const Teacher = require('../model/Teacher');

//  Get all teachers

module.exports.getAllTeachers = async (req, res) => {
  try {
    const data = await Teacher.find();
    return res.status(200).json(data);

  } catch (error) {
    console.log('Teacher:', error);
    return res.status(400).json(`${error}`);
  }
}


// Getting single teacher

module.exports.getTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Teacher.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(`${error}`)
  }

}


// Adding Teachers

module.exports.addTeachers = async (req, res) => {
  const {
    fullname,
    profession,
  } = req.body;

  try {
    await Teacher.create({
      fullname,
      profession,
      photo: req.imagePath
    });

    return res.status(200).json('success');
  } catch (error) {
    return res.status(400).json(`${error}`)

  }
}