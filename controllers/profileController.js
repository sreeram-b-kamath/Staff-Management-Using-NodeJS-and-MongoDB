const ProfileService = require('../services/profileService');

exports.createProfile = async(req,res) =>{
    try{
        const profile = await ProfileService.createProfile(req.body);
        res.status(201).json(profile);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

exports.getProfile = async (req, res) => {
    try {
      const profile = await ProfileService.getProfile(req.params.id);
      res.status(200).json(profile);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  exports.updateProfile = async (req, res) => {
    try {
      const profile = await ProfileService.updateProfile(req.params.id, req.body);
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.deleteProfile = async (req, res) => {
    try {
      await ProfileService.deleteProfile(req.params.id);
      res.status(204).json({ message: 'Profile deleted successfully' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  