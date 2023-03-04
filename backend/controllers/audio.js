const Audio = require("../models/Audio");
const cloudinary = require("../middleware/cloudinary");


module.exports = {
    postAudio: async(req,res)=>{
        try{
            const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "auto"});    
            
            const voiceLine = await Audio.create({
                audio: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.body.user
            })
        
            res.json({voiceLine})
        }catch(err){
            console.error(err)
        }
    }
}