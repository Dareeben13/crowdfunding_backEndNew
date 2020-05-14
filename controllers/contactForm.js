const ContactForm = require("../modles/contactForm");

const { errorHandler } = require("../helpers/dbErrorHandler");



exports.contactById = (req, res, next, id) => {
    ContactForm.findById(id)
    .exec((err, contact) => {
        if (err || !contact) {
            return res.status(400).json({error: " contact not found"});
        }
        req.contact = contact;
        next();
    });
};

exports.read = (req, res) => {
  
    return res.json(req.contact);
};

exports.contactForm = (req, res) => {
  console.log("req.bod");
  const contactForm = new ContactForm(req.body);
  contactForm.save((err, contactForm) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
        contactForm
    });
  });
};


exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
  
    ContactForm.find()
    
      .sort([[sortBy, order]])
      .exec((err, contact) => {
        if (err) {
          return res.status(400).json({ error: "contact not found" });
        }
        res.json(contact);
      });
  };