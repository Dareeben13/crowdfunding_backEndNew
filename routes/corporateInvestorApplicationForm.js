

const express = require("express");
const router = express.Router();


const { create, corporateInvestorById, update, read, list, listRelated } = require("../controllers/corporateInvestorApplicationForm");

const { requireSignin, isAuth } = require("../controllers/auth");


const {  userById } = require("../controllers/user");

router.get("/corporate/investor/application/:corporateInvestorId", read);
router.post("/corporate/investor/application/create/:userId", requireSignin, isAuth ,create);
 router.put("/corporate/investor/application/update/:corporateInvestorId/:userId", requireSignin, isAuth, update);
 router.get("/corporate/investor/application", list);
 router.get("/corporate/investor/related/:userId", listRelated);


router.param("corporateInvestorId", corporateInvestorById);
router.param("userId", userById);


module.exports = router;