const mongoose = require("mongoose");

const AudioSchema = new mongoose.Schema({
    name: {type: String},
    audio: {type: String},
    user: {type: String},
  });

  module.exports = mongoose.model("Audio", AudioSchema);