const Classes = require('../model/classes');


// Getting classes

module.exports.getClasses = async (req, res) => {
  try {
    const data = await Classes.find();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(400).json(`${error}`);

  }
}

// Getting single Classes

module.exports.getSingleClass = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Classes.findById(id);
    return res.status.json(data);
  } catch (error) {
    return res.status.json(`${error}`);

  }
}

// Adding classes

module.exports.addClass = async (req, res) => {
  const {
    classname,
    photo,
    price,
    age,
    time,
    capacity,
    teacher
  } = req.body;

  try {
    await Classes.create({
      classname,
      photo,
      price,
      age,
      time,
      capacity,
      teacher
    })
    return res.status(200).json('success');
  } catch (error) {
    console.log('class:', error)
    return res.status(400).json(`${error}`)

  }

}