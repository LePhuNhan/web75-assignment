import express from 'express';
import schoolController from '../controllers/schoolController.js';

const router = express.Router();

// GET all schools
router.get('/schools', schoolController.getAllSchools);

// GET school by ID
router.get('/schools/:id', schoolController.getSchoolById);

// POST create school
router.post('/schools', schoolController.createSchool);

// PUT update school by ID
router.put('/schools/:id', schoolController.updateSchoolById);

// DELETE school by ID
router.delete('/schools/:id', schoolController.deleteSchoolById);

export default router;
