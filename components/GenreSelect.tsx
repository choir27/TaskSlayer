import React from "react";
import { GenreSelectProps } from "../middleware/Interface";

export default function GenreSelect(props: GenreSelectProps) {
  const genres = [
    "Pop music",
    "Rock",
    "Rhythm and blues",
    "Hip hop music",
    "Popular music",
    "Electronic music",
    "Electronic dance music",
    "Blues",
    "Heavy metal",
    "Country music",
    "Classical music",
    "Jazz",
    "Folk music",
    "Easy listening",
    "Funk",
    "Reggae",
    "Progressive rock",
    "Music of Latin America",
    "Punk rock",
    "New-age music",
    "Soul music",
    "Pop rock",
    "Synth-pop",
    "Indie rock",
    "World music",
    "Industrial music",
    "Disco",
    "Vocal music",
    "Alternative rock",
    "Techno",
    "New wave",
    "Latin music",
    "Dance music",
    "House music",
    "Latin pop",
    "Indie pop",
    "Tejano music",
    "Soundtrack",
    "Instrumental",
    "Children's music",
    "Jungle music",
    "J-pop",
    "Experimental music",
    "Christian/Gospel",
    "Post-disco",
    "Dub",
    "Ska",
    "Drum and bass",
    "Electronica",
    "Electronic rock",
  ];

  const options = genres.map((genre) => {
    return <option key={genre}>{genre}</option>;
  });

  return <select onChange={(e) => props.onGenreChange(e)}>{options}</select>;
}
