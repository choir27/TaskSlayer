const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


module.exports = {
  getUser: async(req,res)=>{
try{
  res.json({user: req.user})
}catch(err){
  console.error(err);
}
  },
  postSignup : async (req, res, next) => {
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

      let user = new User({
          name,
          email,
          userName,
          password: hashedPassword,
      })

      User.findOne(
        { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
        (err, existingUser) => {
          if (err) {
            return next(err);
          }
          if (existingUser) {
            req.flash("errors", {
              msg: "Account with that email address or username already exists.",
            });
            return next(err);
          }
          user.save((err) => {
            if (err) {
              return next(err);
            }
            req.logIn(user, (err) => {
              if (err) {
                return next(err);
              }
              
              if(user){
                jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '30d'}, (err,token)=> {
                  res.json({
                    token,
                    user
                  })
                  tokenItem = token;
                  })
              } else{
                          res.status(400)
                          throw new Error('Invalid user data')
                      }           
                    
                    });
          });
        }
      );

    
    }catch(err){
      console.error(err)
  }
},
postLogin : async (req, res) => {
  try{
      const {email, password} = req.body

      //checks for user email
      const user = await User.findOne({email})

      console.log(req.user)

      if(bcrypt.compare(password, user.password)){
jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '30d'}, (err,token)=> {
  res.json({
    token,
    user
  })
  })
  console.log(req.user)

      } else {
          res.status(400)
          throw new Error('Invalid credentials')
      }
  }catch(err){
      console.error(err)
  }
  },
logout : (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.json({msg: "logged out successfully"})
  });

},

  }