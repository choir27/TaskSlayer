const express = require("express");
const router = express.Router();
const authController = require("../controllers/user");
const audioController = require("../controllers/audio")
const MongoClient = require('mongodb').MongoClient
require("dotenv").config();
const { protect } = require('../middleware/auth')
const cloudinary = require("../middleware/cloudinary");
const Audio = require("../models/Audio");

const multer = require('multer')
      DIR = "./public";
      const { v4 } = require('uuidv4');

const storage = multer.diskStorage({
    filename: (req,file,cb) => {
        const fileName = file.originalname.toLowerCase().split(" ").join("-");
        cb(null, fileName);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);   
    }
});

let db,
dbName = 'test'

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName)
    })

//Main Routes - simplified for now
router.post("/login", authController.postLogin);
router.get("/user", authController.getUser);
router.get("/logout", authController.logout);
router.post("/register", authController.postSignup);
router.get('/api',(req,res)=>{
    db.collection('users').find().toArray()
    .then(data=>{
        res.json(data)
    }).catch(err =>console.error(err))
})


router.post("/addAudio", upload.single("file"), async(req,res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "auto"});    
        
        const voiceLine = await Audio.create({
            audio: result.secure_url,
            cloudinaryId: result.public_id,
            user: req.user
        })
    
        res.json({voiceLine})
    }catch(err){
        console.error(err)
    }
  
});


module.exports = router;    