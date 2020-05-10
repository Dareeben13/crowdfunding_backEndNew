const express = require("express");
const router = express.Router();


const { userById } = require("../controllers/user");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const {
  create,
  blogById,
  update,
  list,
  read,
  remove,
  file,
  readID,
  listB,
  likesnow,
  likeListRelated,
  listBySearch
} = require("../controllers/blog");

router.post("/blog/create/:userId", requireSignin, isAuth, create);
router.put("/blog/:blogId/:userId", requireSignin, isAuth, update);
router.get("/blog", list);
router.get("/blog/listblog", listB);

router.get("/blog/:blogId", read);

router.put("/blog/likes/now/:blogId",   likesnow);
router.get("/blog/related/:blogId",   likeListRelated);

router.post("/blog/by/search", listBySearch);



router.get("/blog/read/:blogId", readID);

router.delete(
  "/blog/delete/:blogId/:userId",
  requireSignin,
  isAdmin,
  isAuth,
  remove
);
router.get("/blog/image/:blogId", file);


router.param("userId", userById);
router.param("blogId", blogById);

module.exports = router;
