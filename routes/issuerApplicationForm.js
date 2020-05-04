const express = require("express");
const router = express.Router();


const {
    create,
    issuerById,
    update,
    read,
    list,
    listRelated,
    file,
    updateStatus,
    declineStatus
} = require("../controllers/issuerApplicationForm");

const {requireSignin, isAuth, isAdmin} = require("../controllers/auth");


const {userById} = require("../controllers/user");

router.get("/issuer/application/:issuerId/:userId",  requireSignin, isAuth, read);
router.post("/issuer/application/create/:userId", requireSignin, isAuth, create);
router.put("/issuer/application/update/:issuerId/:userId", requireSignin, isAuth, update);
router.get("/issuer/user/application/:userId", requireSignin, isAuth, isAdmin,  list);
router.get("/issuer/related/:userId", listRelated);
router.get("/issuer/application/file/:issuerId/:userId",  file);
router.get("/issuer/file2/:issuerId", file);
router.put("/issuer/status/update/:issuerId/:userId", requireSignin, isAuth, isAdmin, updateStatus);
router.put("/issuer/status/decline/:issuerId/:userId", requireSignin, isAuth, isAdmin, declineStatus);


router.param("issuerId", issuerById);
router.param("userId", userById);


module.exports = router;
