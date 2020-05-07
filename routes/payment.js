const express = require("express");
const router = express.Router();

const {create, paymentById, read, list, listRelated, refById, ref, update, listRelatedByProduct} = require("../controllers/payment");
const { projectById } = require("../controllers/project");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById } = require("../controllers/user");

 router.get("/payment/:paymentId", read);

router.post("/payment/create/:userId", requireSignin, isAuth, create);

router.get("/payment/user/:userId", requireSignin, isAuth, listRelated);
router.get("/payment/project/:projectId",  listRelatedByProduct);
router.put("/payment/:paymentId/:userId", requireSignin, isAuth, update);


router.get("/payment/:refId/:userId", requireSignin, isAuth, ref);



// router.delete("/payment/:paymentId/:userId", requireSignin , isAuth,isAdmin,remove);

router.get("/payments", list);

router.param("paymentId", paymentById);
router.param("userId", userById);
router.param("projectId", projectById);
router.param("refId", refById);

module.exports = router;
