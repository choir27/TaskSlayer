const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
    name: {type: String},
    songs: {type: Array},
    user: {type: String},
  });

  module.exports = mongoose.model("Playlist", PlaylistSchema);