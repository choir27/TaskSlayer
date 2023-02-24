const Audio = require("../models/Audio");
const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
const fs = require('fs');


module.exports = {
    postAudio: async(req,res)=>{
        try{
            console.log(req.user)

            // console.log(user)
            // console.log(req)
            // console.log(req.user)

            const result = await cloudinary.uploader.upload(req.body.file);    
    
            const voiceLine = await Audio.create({
                audio: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user
            })

            res.json({voiceLine})
        }catch(err){
            console.error(err);
        }
    },
}