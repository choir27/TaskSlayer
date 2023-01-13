const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const bcrypt = require('bcrypt')


exports.postLogin = (req, res, next) => {
  
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user) => {
    if (err) {
      console.log(err)
      res.status(400)
      return next('Incorrect Login Credentials')
        }
        console.log(err)
        console.log(user)
    if (!user) {
      console.log(user)
      res.status(400)
      return next('Incorrect Login Credentials')
    }

    req.logIn(user, async (err) => {

      const {email, password} = req.body

      if (err) {
        console.log(err)
        res.status(400)
        return next('Incorrect Login Credentials')
      }

     const user = await User.findOne({ email })

     if(user && (bcrypt.compare(password, user.password))){
        res.json({msg: 'logged in!'})
     }else{
      res.status(400)
      console.log(email)
      return next('Incorrect Login Credentials')
     }

    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
  });
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
  });
};

exports.postSignup = (req, res, next) => {

  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    confirmPassword: req.body.confirmPassword,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }] },
    (err, existingUser) => {
      if (err) {
        res.status(400)
        console.log(err)
        return next('Incorrect Login Credentials')
      }
      if (existingUser) {
        res.status(400)
        console.log(existingUser)
        return next('User Already Exists')
      }
      user.save((err) => {
        if (err) {
          res.status(400)
          console.log(err)
          return next('Incorrect Login Credentials')
        }
        req.logIn(user, (err) => {
          if (err) {
            res.status(400)
            console.log(err)
            return next('Incorrect Login Credentials')
          }
          res.json({msg: 'account created'})
        });
      });
    }
  );
};