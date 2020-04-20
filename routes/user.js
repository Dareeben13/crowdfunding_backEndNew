const express = require("express");
const router = express.Router();

const {
  userById,
  read,
  update,
  update2,
  userByIdGet,
  list,
  remove
} = require("../controllers/user");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const { userSignupValidator } = require("../validator");

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);
router.put("/user/update/:userId", update);

router.get("/users/:userId", requireSignin, isAuth, list);
router.delete("/user/:userIdD/:userId", requireSignin, isAuth, isAdmin, remove);

router.param("userId", userById);
router.param("userIdD", userByIdGet);

module.exports = router;
