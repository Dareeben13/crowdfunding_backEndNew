const CorporateInvestorApplicationForm = require("../modles/corporateInvestorApplicationForm");
const { errorHandler } = require("../helpers/dbErrorHandler");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.corporateInvestorById = (req, res, next, id) => {
    CorporateInvestorApplicationForm.findById(id)
    .populate("userId")
    .exec((err, corporateInvestor) => {
      if (err || !corporateInvestor) {
        return res.status(400).json({
          error: " Individual Investor Application not found "
        });
      }
      req.corporateInvestor = corporateInvestor;
      next();
    });
  };
  
  exports.read = (req, res) => {
    return res.json(req.corporateInvestor);
  };
  


exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
     
      // check for all fields
      const {
        corporatename,
        dateofincorporation,
        rcnum,
        registeredAddress,
        officailEmailAddress,
        officialPhoneNumber,
        industry,
        estimatedAnnualTurnOver,
        userId,
        currency,
        bankName,
        accountNumber,
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
        !corporatename ||
        !dateofincorporation ||
        !rcnum ||
        !registeredAddress ||
        !officailEmailAddress ||
        !officialPhoneNumber ||
        !industry ||
        !estimatedAnnualTurnOver ||
        !userId ||
        !currency ||
        !bankName ||
        !accountNumber ||
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
          error: " All fields are required "
        });
      }
  
      let corporateInvestorApplicationForm = new CorporateInvestorApplicationForm(fields);
  
    
  
      corporateInvestorApplicationForm.save((err, result) => {
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
    form.parse(req, (err, fields) => {
      let corporateInvestor = req.corporateInvestor;
      corporateInvestor = _.extend(corporateInvestor, fields);
      corporateInvestor.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        res.json(result);
      });
    });
  };


  exports.list = (req, res) => {
  
    CorporateInvestorApplicationForm.find()
    .populate("userId")
    .exec((err, corporateInvestor) => {
      if (err || !corporateInvestor) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(corporateInvestor);
    });
  };

  exports.listNew = (req, res) => {
      res.json("working")
  }
  

  exports.listRelated = (req, res) => {
    CorporateInvestorApplicationForm.find({ userId: req.profile._id  })
    .populate('userId')
    .exec((err, project ) =>{
       if (err) {
           return res.status(400).json({
               error: "Project not found"
           });
       };
       res.json(project);
    });
  
  };
  