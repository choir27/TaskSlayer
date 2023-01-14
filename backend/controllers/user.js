const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const generateToken  = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
  })
}

module.exports = {
  postSignup : async (req, res) => {
  try{
      const {name , email, password , userName} = req.body

      if(!name || !email || !password || !userName) {
          res.status(400)
          throw new Error('Please add all fields')
      }

      //checks for existing user emails

      const userExists = await User.findOne({email})

      if(userExists){
          res.status(400)
          throw new Error('User already exists')
      }

      //hashes password

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      //create user

      const user = await User.create({
          name,
          email,
          userName,
          password: hashedPassword,
      })

      if(user){
          res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          userName: user.userName,
          token: generateToken(user._id)
          })
      } else{
          res.status(400)
          throw new Error('Invalid user data')
      }

  }catch(err){
      console.error(err)
  }
},
postLogin : async (req, res) => {
  try{
      const {email, password} = req.body

      //checks for user email
      const user = await User.findOne({email})


      if(user && (await bcrypt.compare(password, user.password))){
          res.json({
              _id: user.id,
              name: user.name,
              email: user.email,
              token: generateToken(user._id)
          })
      } else {
          res.status(400)
          throw new Error('Invalid credentials')
      }
  }catch(err){
      console.error(err)
  }
  },

getUser : async(req, res) => {
  try{

      const {_id, name, email} = await User.findById(req.user.id)

      res.status(200).json({
          id: _id,
          name,
          email,
      })


  }catch(err){
      console.error(err)
  }
  },

logout : (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
  });
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
  });
}
  }

// exports.postLogin = (req, res, next) => {
  
//   req.body.email = validator.normalizeEmail(req.body.email, {
//     gmail_remove_dots: false,
//   });

//   passport.authenticate("local", (err, user) => {
//     if (err) {
//       console.log(err)
//       res.status(400)
//       return next('Incorrect Login Credentials')
//         }
//         console.log(err)
//         console.log(user)
//     if (!user) {
//       console.log(user)
//       res.status(400)
//       return next('Incorrect Login Credentials')
//     }

//     req.logIn(user, async (err) => {

//       const {email, password} = req.body

//       if (err) {
//         console.log(err)
//         res.status(400)
//         return next('Incorrect Login Credentials')
//       }

//      const user = await User.findOne({ email })

//      if(user && (bcrypt.compare(password, user.password))){
//         res.json({msg: 'logged in!'})
//      }else{
//       res.status(400)
//       console.log(email)
//       return next('Incorrect Login Credentials')
//      }

//     });
//   })(req, res, next);
// };

// exports.logout = (req, res) => {
//   req.logout(function(err) {
//     if (err) { return next(err); }
//   });
//   req.session.destroy((err) => {
//     if (err)
//       console.log("Error : Failed to destroy the session during logout.", err);
//     req.user = null;
//   });
// };

// exports.postSignup = (req, res, next) => {

//   req.body.email = validator.normalizeEmail(req.body.email, {
//     gmail_remove_dots: false,
//   });

//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     userName: req.body.userName,
//     confirmPassword: req.body.confirmPassword,
//     password: req.body.password,
//   });

//   User.findOne(
//     { $or: [{ email: req.body.email }] },
//     (err, existingUser) => {
//       if (err) {
//         res.status(400)
//         console.log(err)
//         return next('Incorrect Login Credentials')
//       }
//       if (existingUser) {
//         res.status(400)
//         console.log(existingUser)
//         return next('User Already Exists')
//       }
//       user.save((err) => {
//         if (err) {
//           res.status(400)
//           console.log(err)
//           return next('Incorrect Login Credentials')
//         }
//         req.logIn(user, (err) => {
//           if (err) {
//             res.status(400)
//             console.log(err)
//             return next('Incorrect Login Credentials')
//           }
//           res.json({msg: 'account created'})
//         });
//       });
//     }
//   );
// };