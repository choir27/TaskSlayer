const express = require("express");
const multer = require('multer')
const router = express.Router();
const authController = require("../controllers/user");
const audioController = require("../controllers/audio")
const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();

let db,
dbName = 'test'


MongoClient.connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true,
     useNewUrlParser: true,})
    .then(client => {
        db = client.db(dbName)
    })


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


//Main Routes - simplified for now
router.post("/login", authController.postLogin);
router.get("/user", authController.getUser);
router.get("/logout", authController.logout);
router.post("/register", authController.postSignup);

router.get('/api', async(req,res)=>{
    try{
        let data = await db.collection('users').find().toArray()
        res.json(data);
    }catch(err){
        console.error(err)
    }
})


router.get('/audio',async(req,res)=>{
    try{
        let data = await db.collection('audios').find().toArray()
        res.json(data);
    }catch(err){
        console.error(err)
    }

})



router.post("/addAudio", upload.single("file"), audioController.postAudio);
 

module.exports = router;    