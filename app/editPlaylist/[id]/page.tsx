"use client";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import EditPlaylist from "../../../hooks/EditPlaylist";
import "../../../css/global.css";
import "../../../css/mediaQuery.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchResultsDisplay from "../../search/page";
import { State, Action } from "../../../middleware/Type";
import { useStore } from "../../../middleware/Zustand";

export default function GetServerSideProps(ctx) {
  const userId = ctx.params;
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
          <section className="main" id="home">
            <section>
              <h1>Edit Playlist</h1>
              <EditPlaylist id={userId.id} />
            </section>
          </section>

          <Footer />
        </>
      )}
    </>
  );
}
