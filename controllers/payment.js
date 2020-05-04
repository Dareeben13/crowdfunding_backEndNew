const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Payment = require("../modles/payment");
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.paymentById = (req, res, next, id) => {
    Payment.findById(id).populate("projectId", '-image').populate("userId").exec((err, payment) => {
        if (err || !payment) {
            return res.status(400).json({error: " Project not found"});
        }
        req.payment = payment;
        next();
    });
};

exports.read = (req, res) => {
    req.payment.image = undefined;
    return res.json(req.payment);
};

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({error: "File could not be uploaded"});
        }
        // check for all fields
        const {userId, projectId, amount} = fields;

        if (!userId || !projectId || !amount) {
            return res.status(400).json({error: " All fields are required "});
        }

        let payment = new Payment(fields);

        payment.save((err, result) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.json(result);
        });
    });
}


// exports.update = (req, res) => {
// let form = new formidable.IncomingForm();
// form.keepExtensions = true;
// form.parse(req, (err, fields, files) => {
//     if (err) {
//       return res.status(400).json({ error: "File could not be uploaded" });
//     }

//     let payment = req.payment;
//     payment = _.extend(payment, fields);


//     payment.save((err, result) => {
//       if (err) {
//         return res.status(400).json({ error: errorHandler(err) });
//       }
//       res.json(result);
//     });
// });
// };


exports.update = (req, res) => {
    Payment.findOne({
        _id: req.payment._id
    }, (err, payment) => {
        if (err || !payment) {
            return res.status(400).json({error: 'Payment not found'});
        }
        payment.status = 1;
        payment.save((err, updatedPayment) => {
            if (err) {
                console.log('PAYMENT UPDATE ERROR', err);
                return res.status(400).json({error: 'Payment update failed'});
            }
            res.json(updatedPayment);
        });
    });
};


exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Payment.find().sort([[sortBy, order]]).limit(limit).populate("projectId", '-image').populate("userId").exec((err, payment) => {
        if (err) {
            return res.status(400).json({error: "payment not found"});
        }
        res.json(payment);
    });
};


exports.listRelated = (req, res) => {
    Payment.find({userId: req.profile._id, status: 1}).populate("projectId", '-image').populate("userId").exec((err, payment) => {
        if (err) {
            return res.status(400).json({error: "payment not found"});
        };
        res.json(payment);
    });

};


exports.listRelatedByProduct = (req, res) => {
    Payment.find({projectId: req.project._id, status: 1}).populate("projectId", '-image').populate("userId").exec((err, payment) => {
        if (err) {
            return res.status(400).json({error: "payment not found"});
        };
        res.json(payment);
    });

};



exports.refById = (req, res, next, id) => {
    Payment.find({referenceId: id}).populate("projectId", '-image').populate("userId").exec((err, payment) => {
        if (err || !payment) {
            return res.status(400).json({error: " Project not found"});
        }
        req.ref = payment;
        next();
    });
};


exports.ref = (req, res) => {
    return res.json(req.ref);
};
