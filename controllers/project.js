const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Project = require("../modles/project");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.projectById = (req, res, next, id) => {
  Project.findById(id)
  .populate("category")
  .populate("userId")
  

  .exec((err, project) => {
    if (err || !project) {
      return res.status(400).json({
        error: " Project not found"
      });
    }
    req.project = project;
    next();
  });
};

exports.read = (req, res) => {
  req.project.image = undefined;
  return res.json(req.project);
};

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: "File could not be uploaded" });
    }
    // check for all fields
    const {
      title,
      description,
      pledge,
      location,
      website,
      returns,
      duration,
      image,
      pdf
    } = fields;

    if (
      !title ||
      !description ||
      !pledge ||
      !location ||
      !website ||
      !returns ||
      !duration
    ) {
      return res.status(400).json({
        error: " All fields are required "
      });
    }

    let project = new Project(fields);
    if (files.image) {
      console.log("FILES PHOTO", files.image);
      project.image.data = fs.readFileSync(files.image.path);
      project.image.contentType = files.image.type;
      project.image.path = files.image.path;
      project.image.name = files.image.name;
    }
    if (files.pdf) {
      console.log("FILES PHOTO", files.pdf);
      project.pdf.data = fs.readFileSync(files.pdf.path);
      project.pdf.contentType = files.pdf.type;
      project.pdf.path = files.pdf.path;
      project.pdf.name = files.pdf.name;
    }

    project.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.json(result);
    });
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: "File could not be uploaded" });
    }

    let project = req.project;
    project = _.extend(project, fields);

    if (files.image) {
      console.log("FILES PHOTO", files.image);
      project.image.data = fs.readFileSync(files.image.path);
      project.image.contentType = files.image.type;
      project.image.path = files.image.path;
      project.image.name = files.image.name;
    }

    project.save((err, result) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      res.json(result);
    });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  Project.find()
    .select("-image")
    .sort([[sortBy, order]])
    .limit(limit)
    .populate("category")
    .populate("userId")
    .exec((err, project) => {
      if (err) {
        return res.status(400).json({
          error: "project not found"
        });
      }
      res.json(project);
    });
};


exports.listProject = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  Project.find({ status: 1  })
    .select("-image")
    .sort([[sortBy, order]])
    .limit(limit)
    .populate("category")
    .populate("userId")
    .exec((err, project) => {
      if (err) {
        return res.status(400).json({
          error: "project not found"
        });
      }
      res.json(project);
    });
};


exports.remove = (req, res) => {
  let project = req.project;
  project.remove((err, deletedProject) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json({
      message: "Project deleted succesfully"
    });
  });
};

exports.file = (req, res, next) => {
  if (req.project.image.data) {
    res.set("Content-Type", req.project.image.contentType);
    return res.send(req.project.image.data);
  }
  next();
};


exports.listRelated = (req, res) => {
  Project.find({ userId: req.profile._id  })
    .populate('category')
  .populate('userId')
  .select("-image")

  .exec((err, project ) =>{
     if (err) {
         return res.status(400).json({
             error: "Project not found"
         });
     };
     res.json(project);
  });

};


exports.readID = (req, res) => {
  Project.find({ _id: req.project._id  })
    .populate('category')
  .populate('userId')
  .select("-image")

  .exec((err, project ) =>{
     if (err) {
         return res.status(400).json({
             error: "Project not found"
         });
     };
     res.json(project);
  });

};




/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */
 
// route - make sure its post

 
exports.listBySearch = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 6;
  let skip = parseInt(req.body.skip);
  let findArgs = { status: 1  };

  // console.log(order, sortBy, limit, skip, req.body.filters);
  // console.log("findArgs", findArgs);

  for (let key in req.body.filters) {
      if (req.body.filters[key].length > 0) {
         
              findArgs[key] = req.body.filters[key];
          
      }
   
  }

  Project.find(findArgs)
      .select("-image")
      .populate("category")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, data) => {
          if (err) {
              return res.status(400).json({
                  error: "Project not found"
              });
          }
          res.json({
              size: data.length,
              data
          });
      });
};



