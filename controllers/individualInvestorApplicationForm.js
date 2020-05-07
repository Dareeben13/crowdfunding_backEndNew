const IndividualInvestorAppclicationForm = require("../modles/individualInvestorApplicationForm");
const { errorHandler } = require("../helpers/dbErrorHandler");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.individualInvestorById = (req, res, next, id) => {
    IndividualInvestorAppclicationForm.findById(id)
    .populate("userId")
    .exec((err, individualInvestor) => {
      if (err || !individualInvestor) {
        return res.status(400).json({
          error: " Individual Investor Application not found "
        });
      }
      req.individualInvestor = individualInvestor;
      next();
    });
  };
  
  exports.read = (req, res) => {
    return res.json(req.individualInvestor);
  };
  


exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
     
      // check for all fields
      const {
        title,
        firstname,
        lastname,
        middlename,
        gender,
        dob,
        nationality,
        userId,
        countryOfResidence,
        identification,
        maidenname,
        occupation,
        industry,
        estimatedAnnualIncome,
        originOfFunds,
        maximumAmountForInvestment,
        currency,
        address,
        telephone,
        city,
        state,
        email
      } = fields;
  
      if (
        !title ||
        !firstname ||
        !lastname ||
        !middlename ||
        !gender ||
        !dob ||
        !nationality ||
        !userId ||
        !countryOfResidence ||
        !identification ||
        !maidenname ||
        !occupation ||
        !industry ||
        !estimatedAnnualIncome ||
        !originOfFunds ||
        !maximumAmountForInvestment ||
        !currency ||
        !address ||
        !telephone ||
        !city ||
        !state ||
        !email
      ) {
        return res.status(400).json({
          error: " All fields are required "
        });
      }
  
      let individualInvestorAppclicationForm = new IndividualInvestorAppclicationForm(fields);
  
    
  
      individualInvestorAppclicationForm.save((err, result) => {
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
      let individualInvestor = req.individualInvestor;
      individualInvestor = _.extend(individualInvestor, fields);
      individualInvestor.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(result);
      });
    });
  };


  exports.list = (req, res) => {
  
    IndividualInvestorAppclicationForm.find()
    .populate("userId")
    .exec((err, individualInvestor) => {
      if (err || !individualInvestor) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(individualInvestor);
    });
  };

  exports.listNew = (req, res) => {
      res.json("working")
  }

  exports.listRelated = (req, res) => {
    IndividualInvestorAppclicationForm.find({ userId: req.profile._id  })
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

  exports.updateStatus = (req, res) => {
    IndividualInvestorAppclicationForm.findOne({
        _id: req.individualInvestor._id
    }
  
    , (err, individualInvestor) => {
        if (err || !individualInvestor) {
            return res.status(400).json({error: 'Payment not found'});
        }
        individualInvestor.status = 1;
        individualInvestor.save((err, individualInvestor) => {
            if (err) {
                console.log('PAYMENT UPDATE ERROR', err);
                return res.status(400).json({error: 'Payment update failed'});
            }
           
            res.json(individualInvestor);
        });
    });
};


exports.declineStatus = (req, res) => {
  IndividualInvestorAppclicationForm.findOne({
      _id: req.individualInvestor._id
  }

  , (err, individualInvestor) => {
      if (err || !individualInvestor) {
          return res.status(400).json({error: 'Payment not found'});
      }
      individualInvestor.status = 2;
      individualInvestor.save((err, individualInvestor) => {
          if (err) {
              console.log('PAYMENT UPDATE ERROR', err);
              return res.status(400).json({error: 'Payment update failed'});
          }
         
          res.json(individualInvestor);
      });
  });
};
  
  