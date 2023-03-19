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
router.post("/login", authController.login);
router.post("/register", authController.signup);

router.get("/logout", authController.logout);
router.get("/user", authController.getUser);

router.delete("/deletePost/:id", audioController.deletePost);
router.put("/choosePlaylist/:id", audioController.choosePlaylist);
router.delete("/deletePlaylist/:id", audioController.deletePlaylist);
router.put("deleteCurrentPlaylist", audioController.deleteCurrentPlaylist);

router.post("/addAudio", upload.single("file"), audioController.postAudio);
router.put("/addToPlaylist/:id", audioController.addToPlaylist);
router.post("/createPlaylist", audioController.createPlaylist);

const getCollectionData = async (collectionName) => {
    try{
        let data = await db.collection(collectionName).find().toArray()
        return data;
    }catch(err){
        res.status(500)
        console.error(err)
    }
};


router.get("/currentPlaylist", async(req,res)=>{
    try{
        const data = await getCollectionData("currentplaylists")
        res.json(data);
    }catch(err){
        console.error(err)
    }
})

router.get('/api', async(req,res)=>{
    try{
        const data = await getCollectionData('users')
        res.json(data);
    }catch(err){
        res.status(500)
        console.error(err)
    }
})

router.get('/playlist', async(req,res)=>{
    try{
        const data = await getCollectionData('playlists')
        res.json(data);
    }catch(err){
        res.status(500)
        console.error(err)
    }
})


router.get('/audio',async(req,res)=>{
    try{
        const data = await getCollectionData('audios')
        res.json(data);
    }catch(err){
        res.status(500)
        console.error(err)
    }
})



 

module.exports = router;    