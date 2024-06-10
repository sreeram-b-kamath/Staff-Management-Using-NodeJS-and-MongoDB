const express = require('express');
const userDeptController = require('../controllers/userDeptController');

const router = express.Router();

router.post('/', userDeptController.assignUserToDepartment);
router.get('/:user_id', userDeptController.getUserDepartments);

module.exports = router;
