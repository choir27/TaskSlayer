"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MusicPlayer from "../../components/MusicPlayer";
import "../../css/global.css";
import "../../css/mediaQuery.css";
import { useStore } from "../../middleware/Zustand";
import { State, Action } from "../../middleware/Type";
import SearchResultsDisplay from "../search/page";
import { useEffect } from "react";

const About = () => {
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
        <>
          <Header />

          <section id="about" className="main">
            <h1>About</h1>

            <MusicPlayer />

            <article className="flex column alignItems">
              <p>
                Music is unique in the sense that it brings all sorts of people
                together, regardless of language barriers and culture
                differences. EchoStream strives to do the same as an audio
                sharing web application that allows authenticated users to
                search for songs posted by all users and listen to various song
                tracks.
              </p>
              <p>
                Users are also able to create playlists, add/remove songs to
                those playlists.
              </p>
            </article>
          </section>

          <Footer />
        </>
      )}
    </>
  );
};

export default About;
