const mongoose = require('mongoose');

const userAuthSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserAuth = mongoose.model('UserAuth', userAuthSchema);

module.exports = UserAuth;