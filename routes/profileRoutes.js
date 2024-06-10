const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.post('/',profileController.createProfile);
router.get('/:id', profileController.getProfile);
router.put('/:id', profileController.updateProfile);
router.delete('/:id', profileController.deleteProfile);

module.exports = router;
