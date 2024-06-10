const DepartmentService = require('../services/deptService');

exports.createDepartment = async (req, res) => {
    try {
        const department = await DepartmentService.createDepartment(req.body);
        res.status(201).json(department);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getDepartment = async (req, res) => {
    try {
        const department = await DepartmentService.getDepartment(req.params.id);
        res.status(200).json(department);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const department = await DepartmentService.updateDepartment(req.params.id, req.body);
        res.status(200).json(department);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        await DepartmentService.deleteDepartment(req.params.id);
        res.status(204).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
