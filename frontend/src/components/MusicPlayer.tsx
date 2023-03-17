import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface PlayListItem {
  name: string;
  src: string;
}

interface PlayListState {
  currentMusicIndex: number;
  playlist: PlayListItem[];
}



class PlayList extends Component<unknown, PlayListState> {
  state: PlayListState = {
    currentMusicIndex: 0,
    playlist: [],
  };
  

  componentDidMount() {
    fetch("http://localhost:8000/currentPlaylist")
      .then(res=>res.json())
      .then((data) => {
        const list = data
        const playlist = list[0].playlist.songs
          .filter((item: {user: any}) => item.user === localStorage.getItem('id'))
          .map((ele: { name: any; audio: any; }) => ({ name: ele.name, src: ele.audio }));
        this.setState({ playlist });
      });
  }

  handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex === 0
          ? prevState.playlist.length - 1
          : prevState.currentMusicIndex - 1,
    }));
  };

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex < prevState.playlist.length - 1
          ? prevState.currentMusicIndex + 1
          : 0,
    }));
  };

  render(): React.ReactNode {
    const { currentMusicIndex, playlist } = this.state;



    return (
      <div>
        <p>Currently Playing: </p>
  <p>{playlist[currentMusicIndex] ? playlist[currentMusicIndex].name : "No music has been added"}</p>
        {playlist.length > 0 && (
          <AudioPlayer
            key = {currentMusicIndex}
            onEnded={this.handleClickNext}
            autoPlayAfterSrcChange={true}
            showSkipControls={true}
            showJumpControls={false}
            src={playlist[currentMusicIndex].src}
            onClickPrevious={this.handleClickPrevious}
            onClickNext={this.handleClickNext}
          />
        )}
      </div>
    );
  }
}

export default PlayList;
