const UserDeptService = require('../services/userDeptService');

exports.assignUserToDepartment = async (req, res) => {
  try {
    const userDept = await UserDeptService.assignUserToDepartment(req.body);
    res.status(201).json(userDept);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserDepartments = async (req, res) => {
  try {
    const userDepts = await UserDeptService.getUserDepartments(req.params.user_id);
    res.status(200).json(userDepts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
