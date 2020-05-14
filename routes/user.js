const express = require("express");
const router = express.Router();

const {
  userById,
  read,
  update,
  update2,
  userByIdGet,
  list,
  remove,
  passwordReset,
  frontendlist,
  investorList
} = require("../controllers/user");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const { userSignupValidator } = require("../validator");

router.get("/user/:userId",  read);
router.put("/user/:userId", requireSignin, isAuth, update);
router.put("/user/update/:userId", update);
router.put("/user/passwordreset/:userId", passwordReset);


router.get("/users/:userId", requireSignin, isAuth, list);

router.get("/users/frontend/list", frontendlist);
router.get("/users/investor/list", investorList);

router.delete("/user/:userIdD/:userId", requireSignin, isAuth, isAdmin, remove);

router.param("userId", userById);
router.param("userIdD", userByIdGet);

module.exports = router;
