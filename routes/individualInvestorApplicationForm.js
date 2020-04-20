

const express = require("express");
const router = express.Router();


const { create, individualInvestorById, update, read, list, listRelated } = require("../controllers/individualInvestorApplicationForm");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");


const {  userById } = require("../controllers/user");

router.get("/individual/investor/application/:individualInvestorId", read);
router.post("/individual/investor/application/create/:userId", requireSignin, isAuth ,create);
 router.put("/individual/investor/application/update/:individualInvestorId/:userId", requireSignin, isAuth, update);
 router.get("/individual/investor/application", list);
 router.get("/individual/investor/related/:userId", listRelated);


router.param("individualInvestorId", individualInvestorById);
router.param("userId", userById);


module.exports = router;