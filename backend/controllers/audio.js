const Audio = require("../models/Audio");
const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
const fs = require('fs');

module.exports = {
    postAudio: async(req,res)=>{
        try{
            const {audio} = req.body

            console.log(audio)

            let file = fs.readFileSync(audio);
            console.log(file)

            const result = await cloudinary.uploader.upload(audio);

    
            const voiceLine = await Audio.create({
                audio: result.secure_url
            })

            res.json({voiceLine})
        }catch(err){
            console.error(err);
        }
    },
}