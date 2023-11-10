"use client"
import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {useStore} from "../middleware/Zustand"
import {Audio} from "../middleware/Interface"
import {State} from "../middleware/Type"
import ShufflePlaylist from "../components/ShufflePlaylist"
import Shuffle from "../components/ShufflePlaylist"

export default function PlayList(){
  const [autoplay, setAutoplay] = useState(false);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [song, setSong] = useState<Audio[]>([]);
  const [playlist, setPlaylist] = useState<string>("");

  const songs = useStore((state:State)=>state.song);

  useEffect(() => {
    try {
          if (songs.length && !localStorage.getItem("playlist")) {
            const songStorage = localStorage.getItem("song") as string;
            const playlistSongs = JSON.parse(songStorage)

            const filteredPlaylist = songs.filter((audio: Audio) =>audio.audio === playlistSongs[0]);
          

            setSong(filteredPlaylist);
            setPlaylist(playlistSongs);

          }else if(localStorage.getItem("playlist")){
            const playlist: Audio[] = [];
            const playlistStorage = localStorage.getItem("playlist") as string;
            const playlistSongs = JSON.parse(playlistStorage);
            
            // Convert songs array to a map for faster lookups
            const songsMap = new Map(songs.map(audio => [audio.audio, audio]));
            
            playlistSongs.song.forEach((element: string) => {
              const audio = songsMap.get(element);
              if (audio) {
                playlist.push(audio);
              }
            });
            
                        
            setSong(playlist);
            setPlaylist(playlistSongs.song);
          }
    } catch (err) {
      console.error(err);
    }
  }, [songs]);

  const handleClickPrevious = (): void => {
    setCurrentMusicIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
    setAutoplay(true);
  };

  const handleClickNext = (): void => {
    setCurrentMusicIndex((prevIndex) =>
      prevIndex < playlist.length - 1 ? prevIndex + 1 : 0
    );
    setAutoplay(true);
  };

  return (
    <section id="player">
      <section>
        <section className="playerInfo">
          <h3>Currently Playing Song</h3>
          <h2>
            {song[currentMusicIndex]
              ? song[currentMusicIndex].name
              : "No music has been added"}
          </h2>
          <ShufflePlaylist/>
        </section>
      </section>

      {playlist.length > 0 && (
        <AudioPlayer
          autoPlay={autoplay}
          key={currentMusicIndex}
          onEnded={handleClickNext}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex]}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          timeFormat = "auto"
        />
      )}
    </section>
  );
};

