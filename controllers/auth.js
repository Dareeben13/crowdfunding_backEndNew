const User = require("../modles/users");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.signup = (req, res) => {
  console.log("req.bod");
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    });
  });
};

exports.signin = (req, res) => {
  // find the user based on firstname
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup"
      });
    }

    if (user.verification !=0) {
      return res.status(401).json({
        error: "Please verify your account to proceed"
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Username and password dont match"
      });
    }

    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token as 's' in cookie with expiry date
    res.cookie("s", token, { expire: new Date() + 9999 });
    // return response with user and token to frontend clinet
    const {
      _id,
      firstname,
      lastname,
      email,
      role,
      userType,
      telephone,
    } = user;
    return res.json({
      token,
      user: {
        _id,
        firstname,
        lastname,
        email,
        role,
        userType,
        telephone,
    
      }
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("s");
  res.json({ message: "Signout Successful" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resource! Access denied"
    });
  }
  next();
};
