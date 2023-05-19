import React, { Component} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface PlayListItem {
  name: string;
  src: string;
}

interface PlayListState {
  autoplay: boolean;
  currentMusicIndex: number;
  playlist: PlayListItem[];
  playlistName: string;
}

class PlayList extends Component<unknown, PlayListState> {
  state: PlayListState = {
    autoplay: false,
    currentMusicIndex: 0,
    playlist: [],
    playlistName: "",
  };
  

  componentDidMount() {
    try{
     
        fetch("https://illya-site-backend-production.up.railway.app/audio")
            .then(res=>res.json())
            .then(data=>{

              if(data){
                const playlist = data
                  .filter((audio: {_id: any})=> audio._id === localStorage.getItem("song"))
                // .filter((item: {user: any})=> item.user === localStorage.getItem("id"))
                // .map((ele: {name: any; audio: any}) => ({name: ele.name, src: ele.audio}));
                
              this.setState({playlist});
              };

            });

          }catch(err){
      console.error(err);
    }
   
  }

  handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex :
        prevState.currentMusicIndex === 0 ? 
            prevState.playlist.length - 1 : prevState.currentMusicIndex - 1,
    }));
    this.setState({autoplay: true});
  };

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex < prevState.playlist.length - 1 ? 
            prevState.currentMusicIndex + 1 : 0,
    }));
    this.setState({autoplay: true});
  };

  render(): React.ReactNode {



    const { currentMusicIndex, playlist } = this.state;
    
    return (
      <div>
        <section className = "flex" id = "playlist">

          <section className = "flex column current">
          <h4>Currently Playing Song</h4>

          <h2>
            { playlist[currentMusicIndex] ? playlist[currentMusicIndex].name : "No music has been added" }
          </h2>
          </section>

          <section className = "flex column">
            <h2>Playlist Name</h2>
            <h2>
            { this.state.playlistName ? this.state.playlistName : "N/A" }
            </h2>
          </section>
        </section>

        {playlist.length > 0 && (
          <AudioPlayer
            autoPlay = {this.state.autoplay}
            key = {currentMusicIndex}
            onEnded={this.handleClickNext}
            showSkipControls={true}
            showJumpControls={false}
            src={playlist[currentMusicIndex].audio}
            onClickPrevious={this.handleClickPrevious}
            onClickNext={this.handleClickNext}
          />
        )}
      </div>
    );
  }
}

export default PlayList;
