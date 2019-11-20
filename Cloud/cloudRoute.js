const express = require('express');
const router = express.Router();

// -- Load model needed for the project
const cloudAction = require('./cloudAction');

const lienAuth = "/";
const lienUpload = "/";

// -- AUTH
router.get(lienAuth, cloudAction.actionAuth);

// -- UPLOAD
router.get(lienUpload, cloudAction.actionUpload);

module.exports = router;