import React, {Component} from 'react';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      player: {
        url:  "http://cdn.pastemagazine.com/www/system/images/photo_albums/star-wars-infinity/large/c3po-sw.png?1384968217",
        role: 'resistance'
      }
    };
  }

  render() {
    return(
      <div>
        <div className="playerCard">
          <div className="logo">
            <div className={this.state.player.role}></div>
          </div>
          <img src={this.state.player.url}></img>
        </div>
      </div>
    );
  }

}
