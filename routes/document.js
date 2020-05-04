const express = require("express");
const router = express.Router();


const { create, documentById, read, listRelated, file, remove} = require("../controllers/document");
const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { projectById, } =require("../controllers/project");

router.get("/document/:documentId", read);
router.post("/document/create/:userById", requireSignin, create);
router.get("/document/related/:projectId", listRelated);
router.get('/document/file/:documentId', file);
router.delete("/document/remove/:reportId/:userId",  requireSignin, remove );




router.param("documentId", documentById);
router.param("userId", userById);
router.param("projectId", projectById);

module.exports = router;
