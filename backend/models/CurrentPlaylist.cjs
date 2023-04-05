const mongoose = require("mongoose");

const CurrentPlaylistSchema = new mongoose.Schema({
    playlist: {type: Object},
    user: {type: String},
  });

  module.exports = mongoose.model("CurrentPlaylist", CurrentPlaylistSchema);