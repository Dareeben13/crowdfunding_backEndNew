const express = require("express");
const router = express.Router();

const {mail, passwordReset} = require("../controllers/email");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById, update2, userByEmail } = require("../controllers/user");

router.get("/mail/signup/verification/:userEmail", mail);

router.get("/mail/password/reset/:userEmail", passwordReset);


router.get("/mail/verification/:userId", update2);



router.param("userId", userById);
router.param("userEmail", userByEmail);


module.exports = router;
