const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      age: {
        type: String,
        required: true
      },
      mail: {
        type: String,
        required: true
      },
      phonenumber: {
        type: Number,
        required: true
      }

});

const UserProfile = mongoose.model('UserProfile',userProfileSchema);
module.exports = UserProfile;