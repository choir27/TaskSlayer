const mongoose = require("mongoose");

const AudioSchema = new mongoose.Schema({
    audio: {type: String},
    user: {type: String},
  });

  module.exports = mongoose.model("Audio", AudioSchema);