import express from "express";
import authController from "../controllers/user";
import audioController from "../controllers/audio";
import multer from "multer";
import Audio from "../models/Audio";
import User from "../models/User";
import CurrentPlaylist from "../models/CurrentPlaylist";
import Playlist from "../models/Playlist";
import NodeCache from "node-cache";
import dotenv from "dotenv";

require("dotenv").config();

const router = express.Router();

const cache = new NodeCache();

//Middleware function to cache API response
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    return res.json(cachedResponse);
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };
  next();
};

//Main Routes - simplified for now
router.post("/login", authController.login);
router.post("/register", authController.signup);

router.get("/logout", authController.logout);

router.post("/sendMessage", audioController.sendMessage);

router.get("/currentPlaylist", cacheMiddleware, async (req, res) => {
  try {
    CurrentPlaylist.find({}).then((data) => {
      res.json(data);
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

router.get("/api", cacheMiddleware, async (req, res) => {
  try {
    User.find({}).then((data) => {
      res.json(data);
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

router.get("/playlist", cacheMiddleware, async (req, res) => {
  try {
    Playlist.find({}).then((data) => {
      res.json(data);
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

router.get("/audio", cacheMiddleware, async (req, res) => {
  try {
    Audio.find({}).then((data) => {
      res.json(data);
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

router.delete("/deletePost/:id", audioController.deletePost);
router.put("/choosePlaylist/:id", audioController.choosePlaylist);
router.delete("/deletePlaylist/:id", audioController.deletePlaylist);
router.put("deleteCurrentPlaylist", audioController.deleteCurrentPlaylist);

router.put("/editPlaylist/:id", audioController.editPlaylist);

router.post("/addAudio", upload.single("file"), audioController.postAudio);
router.put("/addToPlaylist/:id", audioController.addToPlaylist);
router.post("/createPlaylist", audioController.createPlaylist);

export default router;