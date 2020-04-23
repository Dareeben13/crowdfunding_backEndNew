const express = require("express");
const router = express.Router();

const { categoryById } = require("../controllers/category");

const { userById } = require("../controllers/user");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const {
  create,
  projectById,
  update,
  list,
  read,
  remove,
  file,
  listRelated,
  listProject,
  listBySearch,
  readID,
  listRelatedByCategory
} = require("../controllers/project");

router.post("/project/create/:userId", requireSignin, isAuth, create);
router.put("/project/:projectId/:userId", requireSignin, isAuth, update);
router.get("/project", list);
router.get("/project/listProject", listProject);

router.get("/project/:projectId", read);

router.get("/project/read/:projectId", readID);

router.delete(
  "/project/:projectId/:userId",
  requireSignin,
  isAdmin,
  isAuth,
  remove
);
router.get("/project/image/:projectId", file);
router.get("/project/user/:userId", listRelated);
router.post("/project/by/search", listBySearch);
router.get("/projects/related/:projectId", listRelatedByCategory);

router.param("categoryId", categoryById);

router.param("userId", userById);
router.param("projectId", projectById);

module.exports = router;
