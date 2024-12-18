import express from 'express';
import { addStudent, getStudentByPrn, getStudentByFName, updateStudentByPrn, deleteStudentByPrn } from '../controllers/studentController.js';

const router = express.Router();

// Add a student
router.post('/', addStudent);

// Get a student by PRN
router.get('/:prn', getStudentByPrn);

// Get a student by First Name
router.get('/:prn', getStudentByFName);

// Update a student by PRN
router.put('/:prn', updateStudentByPrn);

// Delete a student by PRN
router.delete('/:prn', deleteStudentByPrn);

export default router;