const Audio = require("../models/Audio");
const User = require("../models/User");


module.exports = {
    postAudio: async(req,res)=>{
        try{
            const {audio} = req.body
            
            console.log(req)
    
            const voiceLine = await Audio.create({
                audio
            })

            res.json({voiceLine})
        }catch(err){
            console.error(err);
        }
    },
}