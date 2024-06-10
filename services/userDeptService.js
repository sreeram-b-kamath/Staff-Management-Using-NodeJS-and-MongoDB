const UserDept = require('../models/userDept');

exports.assignUserToDepartment = async (data) => {
    const userDept = new UserDept(data);
    return await userDept.save();
};

exports.getUserDepartments = async (user_id) => {
    return await UserDept.find({ user_id }).populate('dep_id');
};
