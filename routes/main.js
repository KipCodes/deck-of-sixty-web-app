const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const threeCardController = require('../controllers/three-card');

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get('/three-card', threeCardController.getThreeCard);

module.exports = router;
