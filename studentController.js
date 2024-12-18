import Student from '../models/Student.model.js';

// Add a new student
export const addStudent = async (req, res) => {
  try {
    console.log("addstudent:",req.body)
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a student by PRN
export const getStudentByPrn = async (req, res) => {
  try {
    console.log('Bloodgroup:', req.params.prn); // Debugging log
    const student = await Student.findOne({ Bloodgroup: req.params.Bloodgroup }); // Correct field name
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error('Error in getting student by Bloodgroup:', err.message); // Debugging log
    res.status(500).json({ message: err.message });
  }
};
export const getStudentByFName = async (req, res) => {
  try {
    console.log('First_Name:', req.params.prn); // Debugging log
    const student = await Student.findOne({ First_Name: req.params.First_Name }); // Correct field name
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error('Error in getting student by First Name:', err.message); // Debugging log
    res.status(500).json({ message: err.message });
  }
};
// Update a student by PRN
export const updateStudentByPrn = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate({ prn: req.params.prn }, req.body, {
      new: true,
    });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a student by PRN
export const deleteStudentByPrn = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ prn: req.params.prn });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};