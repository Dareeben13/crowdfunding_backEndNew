const IssuerApplicationForm = require("../modles/issuerApplicationForm");
const { errorHandler } = require("../helpers/dbErrorHandler");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.issuerById = (req, res, next, id) => {
  IssuerApplicationForm.findById(id)
    .populate("userId")
    .exec((err, issuerApplication) => {
      if (err || !issuerApplication) {
        return res.status(400).json({
          error: " Issuer application Application not found "
        });
      }
      req.issuerApplication = issuerApplication;
      next();
    });
  };
  exports.read = (req, res) => {
    req.issuerApplication.file = undefined;
    return res.json(req.issuerApplication);
  };
  


exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
     
      // check for all fields
      const {
        companyname,
        dateofincorporation,
        rcnum,
        registeredAddress,
        authorisedshare,
        industry,
        estimatedAnnualTurnOver,
        typeofsecurity,
        userId,
        projectDetails,
        estimatedsumtoachieveproject,
        file,
        principalOfficerContactName,
        principalOfficerPhonenumber,
        principallOfficerEmail,
        enquiriesContactName,
        enquiriesPhonenumber,
        enquiriesEmail,
        complianceContactName,
        compliancePhonenumber,
        complianceEmail
      } = fields;
  
      if (
        !companyname ||
        !dateofincorporation ||
        !rcnum ||
        !registeredAddress ||
        !authorisedshare||
        !industry ||
         !estimatedAnnualTurnOver ||
         !typeofsecurity ||
         !userId ||
         !projectDetails ||
         !estimatedsumtoachieveproject ||
         !principalOfficerContactName ||
        !principalOfficerPhonenumber ||
        !principallOfficerEmail ||
        !enquiriesContactName ||
        !enquiriesPhonenumber ||
        !enquiriesEmail ||
        !complianceContactName ||
        !compliancePhonenumber ||
        !complianceEmail 
        
      ) {
        return res.status(400).json({
          error: " All fields are required 4"
        });
      }
  
      let issuerApplicationForm = new IssuerApplicationForm(fields);
      if (files.file) {
        console.log("FILES PHOTO", files.file);
        issuerApplicationForm.file.data = fs.readFileSync(files.file.path);
        issuerApplicationForm.file.contentType = files.file.type;
        issuerApplicationForm.file.path = files.file.path;
        issuerApplicationForm.file.name = files.file.name;
      }
  
      issuerApplicationForm.save((err, result) => {
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
  
      let issuerApplication = req.issuerApplication;
      issuerApplication = _.extend(issuerApplication, fields);

      console.log(req.issuerApplication);
  
      if (files.file) {
        //console.log("FILES PHOTO", files.file);
        issuerApplication.file.data = fs.readFileSync(files.file.path);
        issuerApplication.file.contentType = files.file.type;
        issuerApplication.file.path = files.file.path;
        issuerApplication.file.name = files.file.name;
      }
  
      issuerApplication.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(result);
      });
    });
  };


  exports.list = (req, res) => {
  
    IssuerApplicationForm.find()
    .populate("userId")
    .select("-file")
    .exec((err, issuerApplicationForm) => {
      if (err || !issuerApplicationForm) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(issuerApplicationForm);
    });
  };



  exports.listRelated = (req, res) => {
    IssuerApplicationForm.find({ userId: req.profile._id  })
    .populate('userId')
    .select("-file")
    .exec((err, issuerApplicationForm ) =>{
       if (err) {
           return res.status(400).json({
               error: "Issuer applicationForm not found"
           });
       };
       res.json(issuerApplicationForm);
    });
  
  };


  exports.file = (req, res, next) => {
    if (req.issuerApplication.file.data) {
      res.set("Content-Type", req.issuerApplication.file.contentType);
      return res.send(req.issuerApplication.file.data);
    }
    next();
  };


  exports.updateStatus = (req, res) => {
    IssuerApplicationForm.findOne({
        _id: req.issuerApplication._id
    }
  
    , (err, issuerApplication) => {
        if (err || !issuerApplication) {
            return res.status(400).json({error: 'Payment not found'});
        }
        issuerApplication.status = 1;
        issuerApplication.save((err, issuerApplication) => {
            if (err) {
                console.log('PAYMENT UPDATE ERROR', err);
                return res.status(400).json({error: 'Payment update failed'});
            }
           
            res.json(issuerApplication);
        });
    });
};


exports.declineStatus = (req, res) => {
  IssuerApplicationForm.findOne({
      _id: req.issuerApplication._id
  }

  , (err, issuerApplication) => {
      if (err || !issuerApplication) {
          return res.status(400).json({error: 'Payment not found'});
      }
      issuerApplication.status = 2;
      issuerApplication.save((err, issuerApplication) => {
          if (err) {
              console.log('PAYMENT UPDATE ERROR.', err);
              return res.status(400).json({error: 'Payment update failed'});
          }
         
          res.json(issuerApplication);
      });
  });
};

  
  