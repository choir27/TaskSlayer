"use client"
import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {useStore} from "../middleware/Zustand"
import {Audio} from "../middleware/Interface"
import {State} from "../middleware/Type"

export default function PlayList(){
  const [autoplay, setAutoplay] = useState(false);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [playlist, setPlaylist] = useState<Audio[]>([]);

  const songs = useStore((state:State)=>state.song);

  useEffect(() => {
    try {
          if (songs.length && !localStorage.getItem("playlist")) {
            const filteredPlaylist = songs.filter((audio: Audio) =>audio.$id === localStorage.getItem("song"));
            
            setPlaylist(filteredPlaylist);
          }else{
            const playlist:Audio[] = [];

            songs.forEach((audio:Audio)=>localStorage.getItem("playlist")?.includes(audio.$id) ? playlist.push(audio) : "");
            console.log(playlist)
            setPlaylist(playlist)
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
            {playlist[currentMusicIndex]
              ? playlist[currentMusicIndex].name
              : "No music has been added"}
          </h2>
        </section>
      </section>

      {playlist.length > 0 && (
        <AudioPlayer
          autoPlay={autoplay}
          key={currentMusicIndex}
          onEnded={handleClickNext}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex].audio}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          timeFormat = "auto"
        />
      )}
    </section>
  );
};

