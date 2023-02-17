const Audio = require("../models/Audio");
const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
const fs = require('fs');


module.exports = {
    postAudio: async(req,res,next)=>{
        try{

            console.log(req.file)
            console.log(req.files)
            console.log(req.body.file)

            const result = await cloudinary.uploader.upload(req.body.file);    
    
            const voiceLine = await Audio.create({
                audio: result.secure_url,
                cloudinaryId: result.public_id,
            })

            res.json({voiceLine})
        }catch(err){
            console.error(err);
        }
    },
}