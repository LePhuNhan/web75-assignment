import School from '../models/schoolModel.js';

// Get all schools
const getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    if (!schools) {
        return res.status(404).json({ message: 'There is no School' });
      }
    res.json(schools);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Get school by ID
const getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json(school);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Create a new school
const createSchool = async (req, res) => {
  try {
    const newSchool = new School(req.body);
    const savedSchool = await newSchool.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Update school by ID
const updateSchoolById = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSchool) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json(updatedSchool);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Delete school by ID
const deleteSchoolById = async (req, res) => {
  try {
    const deletedSchool = await School.findByIdAndDelete(req.params.id);
    if (!deletedSchool) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json({ message: 'School deleted successfully' });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export default {
    getAllSchools,
    getSchoolById,
    createSchool,
    updateSchoolById,
    deleteSchoolById,
};
  