const mongoose = require('mongoose');

const userDeptSchema = new mongoose.Schema({
  dep_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAuth',
    required: true
  }
});

const UserDept = mongoose.model('UserDept', userDeptSchema);

module.exports = UserDept;
