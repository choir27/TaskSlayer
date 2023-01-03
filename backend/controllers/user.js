const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const bcrypt = require('bcrypt')



// exports.getLogin = (req, res) => {
//   if (req.user) {
//     res.json({msg: 'logged in!'})
//   }
// };

exports.postLogin = (req, res, next) => {
  
  if (!validator.isEmail(req.body.email)){
    res.status(400)
    throw new Error("Please enter a valid email address." )
  }
  if (validator.isEmpty(req.body.password)){
    res.status(400)
    throw new Error( "Password cannot be blank.")
  }


  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      res.status(400)
      return next('Incorrect Login Credentials')
        }
    if (!user) {
      res.status(400)
      return next('Incorrect Login Credentials')
    }

    req.logIn(user, async (err) => {

      const {email, password} = req.body

      if (err) {
        res.status(400)
        return next('Incorrect Login Credentials')
      }

     const user = await User.findOne({ email })

     if(user && (bcrypt.compare(password, user.password))){
        res.json({msg: 'logged in!'})
     }else{
      res.status(400)
      return next('Incorrect Login Credentials')
     }

    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
  });
};

// exports.getSignup = (req, res) => {
//   if (req.user) {
//     res.json({msg: 'account created'})
//   }
// };

exports.postSignup = (req, res, next) => {
  if (!validator.isEmail(req.body.email)){
    res.status(400)
    throw new Error("Please enter a valid email address.") 
  }
  if (!validator.isLength(req.body.password, { min: 8 })){
    res.status(400)
    throw new Error("Password must be at least 8 characters long") 
  }


  if (req.body.password !== req.body.confirmPassword){
    res.status(400)
    validationErrors.push({ msg: "Passwords do not match" });
    throw new Error("Passwords do not match")
  }

  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        res.status(400)
        return next('Incorrect Login Credentials')
      }
      if (existingUser) {
        res.status(400)
        return next('User Already Exists')
      }
      user.save((err) => {
        if (err) {
          res.status(400)
          return next('Incorrect Login Credentials')
        }
        req.logIn(user, (err) => {
          if (err) {
            res.status(400)
            return next('Incorrect Login Credentials')
          }
          res.json({msg: 'account created'})
        });
      });
    }
  );
};