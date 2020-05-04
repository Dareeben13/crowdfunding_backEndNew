const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Document = require("../modles/document");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.documentById = (req, res, next, id) => {
  Document.findById(id)
    .populate("project", "-image" )
    .exec((err, document) => {
      if (err || !document) {
        return res.status(400).json({
          error: " document not found"
        });
      }
      req.document = document;
      next();
    });
  };

  exports.read = (req, res) => {
   // req.document.file = undefined;
    return res.json(req.document);
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
  
      let document = new Document(fields);
      if (files.file) {
        console.log("FILES PHOTO", files.file);
        document.file.data = fs.readFileSync(files.file.path);
        document.file.contentType = files.file.type;
        document.file.path = files.file.path;
        document.file.name = files.file.name;
      }
  
      document.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(result);
      });
    });
  };


  exports.listRelated = (req, res) => {
    Document.find({ project: req.project._id  })
    .populate("project", "-image" )
    .select("-file")
    .exec((err, document ) =>{
       if (err) {
           return res.status(400).json({
               error: "document not found"
           });
       };
       res.json(document);
    });
  
  };


  exports.file = (req, res, next) => {

    if(req.document.file.data){
      res.set('Content-Type', req.document.file.contentType)
      return res.send(req.document.file.data);
    }
    next();
  };


  exports.remove = (req, res) => {
    let document = req.document;
    document.remove((err, deletedReport) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      res.json({
        message: "document deleted succesfully"
      });
    });
  };
  
  
  