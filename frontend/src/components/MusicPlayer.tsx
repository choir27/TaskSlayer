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
  playlistName: string;
}



class PlayList extends Component<unknown, PlayListState> {
  state: PlayListState = {
    currentMusicIndex: 0,
    playlist: [],
    playlistName: "",
  };
  

  componentDidMount() {
    fetch("http://localhost:8000/currentPlaylist")
      .then(res=>res.json())
      .then((data) => {
        const list = data
        if(list.length < 1 || !list.playlist){          
        fetch("http://localhost:8000/audio")
            .then(res=>res.json())
            .then(data=>{
              const playlist = data
                .filter((item: {user: any})=> item.user === localStorage.getItem("id"))
                .map((ele: {name: any; audio: any}) => ({name: ele.name, src: ele.audio}));
              this.setState({playlist})
            })
        }else{
        const playlistName = list[0].playlist.name
        const playlist = list[0].playlist.songs
          .filter((item: {user: any}) => item.user === localStorage.getItem('id'))
          .map((ele: { name: any; audio: any; }) => ({ name: ele.name, src: ele.audio }));
        this.setState({ playlistName })
        this.setState({ playlist });
        }
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
        <section className = 'flex' id = 'playlist'>
        <section className = "flex column current">
        <h4>Currently Playing Song</h4>
        <h2>{playlist[currentMusicIndex] ? playlist[currentMusicIndex].name : "No music has been added"}</h2>
        </section>
        <section className = "flex column">
      <h2>Playlist Name</h2>
      <h2>{this.state.playlistName ? this.state.playlistName : "N/A"}</h2>
        </section>
        </section>

        {playlist.length > 0 && (
          <AudioPlayer
            key = {currentMusicIndex}
            onEnded={this.handleClickNext}
            autoPlayAfterSrcChange={true}
            autoPlay = {true}
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
