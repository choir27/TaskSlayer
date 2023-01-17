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
              userName: user.userName,
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
          userName,
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