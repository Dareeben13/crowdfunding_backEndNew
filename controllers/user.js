const User = require("../modles/users");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found"
      });
    }
    req.profile = user;
    next();
  });
};

exports.userByIdGet = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: " User not found" });
    }
    req.user = user;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.slat = undefined;

  return res.json(req.profile);
};

exports.test = (req, res) => {
  return req.json("working")
};



exports.update = (req, res) => {
  // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
  const { firstname,lastname,email, telephone, password, role, userType } = req.body;

  User.findOne({ _id: req.profile._id }, (err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User not found'
          });
      }
      if (!firstname) {
          return res.status(400).json({
              error: 'Name is required'
          });
      } else {
          user.firstname = firstname;
      }

      if (password) {
          if (password.length < 6) {
              return res.status(400).json({
                  error: 'Password should be min 6 characters long'
              });
          } else {
              user.password = password;
          }
      }

      user.save((err, updatedUser) => {
          if (err) {
              console.log('USER UPDATE ERROR', err);
              return res.status(400).json({
                  error: 'User update failed'
              });
          }
          updatedUser.hashed_password = undefined;
          updatedUser.salt = undefined;
          res.json(updatedUser);
      });
  });
};


exports.update2 = (req, res) => {
  console.log(req.body)
  console.log( req.user._id)
  
  User.findOneAndUpdate(
    {
      _id: req.user._id
    },
    {
      $set: req.body
    },
    {
      new: true
    },
    (err, userData) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "You are not allowed to perform this action" });
      }
      userData.hashed_password = undefined;
      userData.slat = undefined;
      res.json(userData);
    }
  );
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  User.find()
    .select("-hashed_password")
    .select("-salt")
    .sort([[sortBy, order]])
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({ error: "Users not found" });
      }
      res.json(users);
    });
};

exports.remove = (req, res) => {
  const user = req.user;
  user.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: "user deleted"
    });
  });
};
