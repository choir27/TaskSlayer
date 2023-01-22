const express = require("express");
const router = express.Router();
const authController = require("../controllers/user");
const MongoClient = require('mongodb').MongoClient
require("dotenv").config();

let db,
dbName = 'test'

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName)
    })


    function verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined') {
          const bearer = bearerHeader.split(' ');
          const bearerToken = bearer[1];
          req.token = bearerToken;
          next();
        } else {
          res.sendStatus(403);
        }
      
      }


//Main Routes - simplified for now
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.post("/register", authController.postSignup);
router.get('/api',(req,res)=>{
    db.collection('users').find().toArray()
    .then(data=>{
        res.json(data)
    }).catch(err =>console.error(err))
})

module.exports = router;    