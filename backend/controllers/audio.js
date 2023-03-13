const Audio = require("../models/Audio");
const cloudinary = require("../middleware/cloudinary");


module.exports = {
    postAudio: async(req,res)=>{
        try{
            console.log(req.file.originalname)
            const result = await cloudinary.uploader.upload(    
                req.file.path, 
                {resource_type: "auto"
            });    
            
            const voiceLine = await Audio.create({
                name: req.file.originalname,
                audio: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.body.user
            })
        
            res.json({voiceLine})
        }catch(err){
            console.error(err)
            res.status(500).send("Internal Server Error");
        }
    },
    deletePost: async (req, res) => {
        try{
          let post = await Audio.findById({ _id: req.params.id });

          await cloudinary.uploader.destroy(post.cloudinaryId);

          await Audio.remove({ _id: req.params.id });

        }catch(err){
          console.error(err)
        }
      }
}