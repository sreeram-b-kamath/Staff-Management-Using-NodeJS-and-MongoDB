const Department = require('../models/departments');

exports.createDepartment = async (data) => {
    const department = new Department(data);
    return await department.save();
};

exports.getDepartment = async (id) => {
    return await Department.findById(id);
};

exports.updateDepartment = async (id, data) => {
    return await Department.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteDepartment = async (id) => {
    return await Department.findOneAndDelete({ dep_name });
};
