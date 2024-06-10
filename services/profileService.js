const UserProfile = require('../models/userProfile');

exports.createProfile = async (data) =>{
    const profile = new UserProfile(data);
    return await profile.save();
};

exports.getProfile = async (id) => {
    return await UserProfile.findById(id);
};

exports.updateProfile = async (id, data) => {
    return await UserProfile.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteProfile = async (id) => {
    return await UserProfile.findByIdAndDelete(id);
};