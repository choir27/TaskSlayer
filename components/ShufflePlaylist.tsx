import { Button } from "./Button";

export default function ShufflePlaylist() {
  function ShufflePlaylist() {
    const playlistStorage = localStorage.getItem("playlist") as string;
    const playlistObject = JSON.parse(playlistStorage);

    const array = playlistObject.song;

    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    localStorage.setItem(
      "playlist",
      JSON.stringify({ id: playlistObject.id, song: array }),
    );
    window.location.reload();
  }

  return Button({
    text: "Shuffle",
    className: "button small",
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      ShufflePlaylist(),
  });
}
