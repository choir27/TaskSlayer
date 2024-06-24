"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../css/global.css";
import "../css/mediaQuery.css";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";
import { useStore } from "../middleware/Zustand";
import { State, Action } from "../middleware/Type";
import RenderPlaylist from "../hooks/RenderPlaylist";
import SearchResultsDisplay from "./search/page";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const playlist = useStore((state: State) => state.listOfSongs);
  const songDisplay = useStore((state: State) => state.songDisplay);
  const setSongDisplay = useStore((state: Action) => state.setSongDisplay);
  const songs = useStore((state: State) => state.song);
  const searchDisplay = useStore((state: State) => state.searchDisplay);
  const setSearchDisplay = useStore((state: Action) => state.setSearchDisplay);

  useEffect(() => {
    setSearchDisplay(false);
  }, []);

  return (
    <>
      {searchDisplay ? (
        <SearchResultsDisplay />
      ) : (
        <main className="column flex">
          <Header />

          <section className="main">
            <MusicPlayer />

            <section>
              <RenderPlaylist
                playlist={playlist}
                setSongDisplay={(e) => setSongDisplay(e)}
                songDisplay={songDisplay}
                songs={songs}
                currentPage={currentPage}
                setCurrentPage={(e) => setCurrentPage(e)}
              />
            </section>
          </section>

          <Footer />
        </main>
      )}
    </>
  );
}
