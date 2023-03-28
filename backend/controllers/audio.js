const Audio = require("../models/Audio");
const cloudinary = require("../middleware/cloudinary");
const Playlist = require("../models/Playlist");
const CurrentPlaylist = require("../models/CurrentPlaylist");
const Message = require("../models/Message");

module.exports = {
  sendMessage: async(req,res)=>{
    try{
      const message = await Message.create(req.body)
    res.json(message);

    }catch(err){
      console.error(err);
    }
  },
    editPlaylist: async(req,res)=>{
        try{
          let playlist = await Playlist.findById({_id: req.params.id});
          let data = playlist.songs
          let song = playlist.songs.find((ele,i)=>
            ele._id.toString() === req.body.songID ? i : "")
    
          data.splice(song,1);


          await Playlist.findOneAndUpdate(
            {_id: req.params.id},
            {songs: data},
            {
              new: true,
              runValidators: true,
            }
            );

            await CurrentPlaylist.findOneAndUpdate(
              {_id: "6413a94694c65b807a6ed151"},
              {playlist: playlist},
              {
                new: true,
                runValidators: true,
              }
              );

        }catch(err){
          console.error(err)
          res.status(500).send("Internal server error.");
        }
    },
    deletePlaylist: async (req, res) => {
        try{
        let playlist = await Playlist.findById({ _id: req.params.id });
        await playlist.deleteOne({ _id: req.params.id });

        await CurrentPlaylist.findOneAndUpdate(
          {_id: "6413a94694c65b807a6ed151"},
          {playlist: {}},
          {
            new: true,
            runValidators: true,
          }
          );

        }catch(err){
            console.error(err);
            res.status(500).send("Internal server error.");
        }
    },
    deleteCurrentPlaylist: async (req, res)=> {
      try{
        
        await CurrentPlaylist.findOneAndUpdate(
          {_id: "6413a94694c65b807a6ed151"},
          {playlist: {}},
          {
            new: true,
            runValidators: true,
          }
          );
      }catch(err){
        console.error(err)
      } 
    },
    choosePlaylist: async (req, res) => {
        try {
          let playlist = await Playlist.findById(req.params.id);
          console.log(playlist)
          await CurrentPlaylist.findOneAndUpdate(
            {_id: "6413a94694c65b807a6ed151"},
            {playlist: playlist},
            {
              new: true,
              runValidators: true,
            }
            );
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal server error.");
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
            
            let list = await CurrentPlaylist.findById({_id: "6413a94694c65b807a6ed151"})

            let data = list.playlist
         
            if(data._id.toString() === req.body.playlist){
              await CurrentPlaylist.findOneAndUpdate(
                {_id: "6413a94694c65b807a6ed151"},
                {playlist: playlist},
                {
                  new: true,
                  runValidators: true,
                }
                );
            }
          
            
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

          await Audio.deleteOne({ _id: req.params.id });

        }catch(err){
          console.error(err)
        }
      },
}