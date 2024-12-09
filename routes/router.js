const express = require("express");
const router = express.Router();
const controller = require("../controller/index")

router.get("/getAllCompanies", controller.getAllCompanies);

router.post("/createCompany", controller.createCompany);

router.post("/getCompanyById", controller.getCompanyById);

router.post("/addReview", controller.createReview);

module.exports = router;