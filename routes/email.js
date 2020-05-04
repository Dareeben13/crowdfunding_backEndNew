const express = require("express");
const router = express.Router();

const {mail, passwordReset, payment, applicationVerificationProcessingMail, applicationAccept, applicationDecline} = require("../controllers/email");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById, update2, userByEmail } = require("../controllers/user");
const {refById} = require("../controllers/payment");


router.get("/mail/signup/verification/:userEmail", mail);
router.get("/mail/password/reset/:userEmail", passwordReset);
router.get("/mail/verification/:userId", update2);
router.get("/mail/payment/:refId", payment);
router.get("/mail/application/verification/:userEmail", applicationVerificationProcessingMail);
router.get("/mail/application/accept/:userEmail", applicationAccept);
router.get("/mail/application/decline/:userEmail", applicationDecline);



router.param("userId", userById);
router.param("userEmail", userByEmail);
router.param("refId", refById);

module.exports = router;
