import { Button } from "./Button";
import { State, Action } from "../middleware/Type";
import { Audio, ListOfSongs } from "../middleware/Interface";
import { useStore } from "../middleware/Zustand";
import { toast } from "react-toastify";

export default function Search() {
  const searchValue = useStore((state: State) => state.searchValue);
  const setSearchValue = useStore((state: Action) => state.setSearchValue);
  const setSearchResults = useStore((state: Action) => state.setSearchResults);
  const songs = useStore((state: State) => state.song);
  const playlists = useStore((state: State) => state.listOfSongs);
  const setSearchDisplay = useStore((state: Action) => state.setSearchDisplay);

  function handleSearch() {
    const searchResults: Array<Audio | ListOfSongs> = [];

    songs.forEach((audio: Audio) => {
      if (
        audio?.audio?.toLowerCase().includes(searchValue.toLowerCase()) ||
        audio?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        audio?.user?.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        searchResults.push(audio);
      }
    });

    playlists.forEach((playlist: ListOfSongs) => {
      if (
        playlist?.playlistName
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        playlist?.user?.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        searchResults.push(playlist);
      }

      playlist.playlistSongs.forEach((element: string) => {
        const song = JSON.parse(element);

        if (
          song?.audio?.toLowerCase().includes(searchValue.toLowerCase()) ||
          song?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
          song?.user?.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          searchResults.push(playlist);
        }
      });
    });

    if (!searchResults.length) {
      console.log("No Results Match Your Search");
      toast.error("No Results Match Your Search");
    }

    setSearchResults(searchResults);
    setSearchDisplay(true);
  }

  return (
    <form>
      <input type="search" onChange={(e) => setSearchValue(e.target.value)} />
      <Button
        text=""
        className="fa-solid fa-magnifying-glass button"
        onClick={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      />
    </form>
  );
}
