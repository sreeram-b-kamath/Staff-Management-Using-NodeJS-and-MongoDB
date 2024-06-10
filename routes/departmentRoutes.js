const express = require('express');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.post('/', departmentController.createDepartment);
router.get('/:id', departmentController.getDepartment);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;