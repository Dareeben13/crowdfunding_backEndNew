const express = require("express");
const router = express.Router();


const { create, galleryById, read, listRelated, file, remove} = require("../controllers/gallery");
const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { projectById, } =require("../controllers/project");

router.get("/gallery/:galleryId", read);
router.post("/gallery/create/:userById", requireSignin, create);
router.get("/gallery/related/:projectId", listRelated);
router.get('/gallery/file/:galleryId', file);
router.delete("/gallery/remove/:reportId/:userId",  requireSignin, remove );




router.param("galleryId", galleryById);
router.param("userId", userById);
router.param("projectId", projectById);

module.exports = router;
