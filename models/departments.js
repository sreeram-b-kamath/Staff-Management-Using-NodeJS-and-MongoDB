const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema({
    dep_id: {
        type: Number,
        required: true,
        unique: true
    }
})

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;