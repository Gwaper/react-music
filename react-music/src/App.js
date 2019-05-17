import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor() {
    super();

    this.state={
      url:'https://www.youtube.com/watch?v=LdJawLC6jHs',
      playing: false,
      muted: false,
      volume: 0.5,
      duration:0,
      timePast:0,
      remainTime:0

    };
  }
  togglePlaying= () => {
    this.setState({playing : !this.state.playing})
  };

upVolume=() =>  {
  if(this.state.volume < 1 ){
    this.setState({volume: parseFloat((this.state.volume +0.1).toFixed(1))})
  }
};

downVolume = () => {
  if (this.state.volume > 0){
    this.setState({volume:parseFloat((this.state.volume -0.1).toFixed(1))})
  }
};
toggleMuted = () =>{
  this.setState({muted: !this.state.muted})
}

getDuration= (durationVideo) => {
  this.setState({duration:durationVideo})
  
};

getProgress= (progressVideo) => {
  this.setState({
    timePast:progressVideo.playedSeconds.toFixed(0),
    remainTime: ((this.state.duration - progressVideo.playedSeconds).toFixed(0))
  });

}
handleUrl= (event) =>{
  this.setState({
    url: event.target.value,
  }
  )


}

  render() {
    return (
      <div className="App">
      <ReactPlayer 
        onDuration={this.getDuration} 
        onProgress={this.getProgress}
        volume={this.state.volume} 
        playing={this.state.playing}  
        url = {this.state.url} 
        muted={this.state.muted}
      />
      <input type='text' placeholder="link of video"  value={this.state.url} onChange={this.handleUrl}/>
      <button onClick={this.togglePlaying}>{this.state.playing ? "Calmdown":"lets go"}</button>
      <button onClick={this.toggleMuted}>No sound</button>
      <button onClick = {this.upVolume}>PLUS</button>
      <button onClick={this.downVolume}>MOINS</button>
      <p> you have to watch this vidéo for {this.state.duration} seconds</p>
      <p>you already watch {this.state.timePast}s  and it's remain {this.state.remainTime}s</p>
      </div>
    );
  } 
}

export default App;
