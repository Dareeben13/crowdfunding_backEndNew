const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Gallery = require("../modles/gallery");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.galleryById = (req, res, next, id) => {
    Gallery.findById(id)
    .populate("project", "-image" )
    .exec((err, gallery) => {
      if (err || !gallery) {
        return res.status(400).json({
          error: " gallery not found"
        });
      }
      req.gallery = gallery;
      next();
    });
  };

  exports.read = (req, res) => {
   // req.gallery.file = undefined;
    return res.json(req.gallery);
  };

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: "File could not be uploaded" });
      }
      // check for all fields
      const { project, file } = fields;
  
      if (!project) {
        return res.status(400).json({
          error: " All fields are required "
        });
      }
  
      let gallery = new Gallery(fields);
      if (files.file) {
        console.log("FILES PHOTO", files.file);
        gallery.file.data = fs.readFileSync(files.file.path);
        gallery.file.contentType = files.file.type;
        gallery.file.path = files.file.path;
        gallery.file.name = files.file.name;
      }
  
      gallery.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(result);
      });
    });
  };


  exports.listRelated = (req, res) => {
    Gallery.find({ project: req.project._id  })
    .populate("project", "-image" )
    .select("-file")
    .exec((err, gallery ) =>{
       if (err) {
           return res.status(400).json({
               error: "gallery not found"
           });
       };
       res.json(gallery);
    });
  
  };


  exports.file = (req, res, next) => {

    if(req.gallery.file.data){
      res.set('Content-Type', req.gallery.file.contentType)
      return res.send(req.gallery.file.data);
    }
    next();
  };


  exports.remove = (req, res) => {
    let gallery = req.gallery;
    gallery.remove((err, deletedReport) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      res.json({
        message: "Image deleted succesfully"
      });
    });
  };
  
  
  