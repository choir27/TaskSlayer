const Audio = require("../models/Audio");
const cloudinary = require("../middleware/cloudinary");
const Playlist = require("../models/Playlist");
const CurrentPlaylist = require("../models/CurrentPlaylist")
module.exports = {
    choosePlaylist: async (req, res) => {
        try {
          let playlist = await Playlist.findById(req.params.id);
          await CurrentPlaylist.findOneAndUpdate(
            { _id: "6413a5304d704f7c32da06bd" },
            { playlist: playlist },
            {
              new: true,
              runValidators: true,
            }
          );
          res.status(200).send("Playlist updated successfully.");
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal server error.");
        }
      },
    postAudio: async(req,res)=>{
        try{
            const result = await cloudinary.uploader.upload(    
                req.file.path, 
                {resource_type: "auto"
            });    
            
            const voiceLine = await Audio.create({
                name: req.file.originalname,
                audio: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.body.user,
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
      },
    createPlaylist: async (req, res) => {
        try{
            const playlist = await Playlist.create({
                name: req.body.playlistName,
                user: req.body.user,
                songs: [],
            })

            res.json({playlist})
        }catch(err){
            console.error(err)
        }
    },
    addToPlaylist: async (req, res) => {
        try{
            let audio = await Audio.findById(req.params.id)
            let playlist = await Playlist.findById(req.body.playlist)
            playlist.songs.push(audio)   
            console.log(playlist)
            await Playlist.findOneAndUpdate({_id: req.body.playlist},
                {
                songs : playlist.songs
                }
                ,{
                new: true,
                runValidators: true,
            })
            
        }catch(err){
            console.error(err)
        }
    }
}