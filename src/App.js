import React, { Component } from 'react';
import Setup from './setup';
import TeamSize from './teamSize';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      playerSetups: {
        5: {resistance: 3, spies: 2},
        6: {resistance: 4, spies: 2},
        7: {resistance: 4, spies: 3},
        8: {resistance: 5, spies: 3},
        9: {resistance: 6, spies: 3},
        10: {resistance: 7, spies: 4}
      },

      missionTeamSize: {
        5: {1:2, 2:3, 3:2, 4:3, 5:3},
        6: {1:2, 2:3, 3:4, 4:3, 5:4},
        7: {1:2, 2:3, 3:3, 4:4, 5:4},
        8: {1:3, 2:4, 3:4, 4:5, 5:5},
        9: {1:3, 2:4, 3:4, 4:5, 5:5},
        10: {1:3, 2:4, 3:4, 4:5, 5:5}
      },

      playerCount: 5,
      setup: {resistance: 3, spies: 2},
      teamSize: {1:2, 2:3, 3:2, 4:3, 5:3}
    };

    this.selectNumberOfPlayers = this.selectNumberOfPlayers.bind(this);

  }

  selectNumberOfPlayers(numberOfPlayers) {
    var setup = this.state.playerSetups[numberOfPlayers];
    var teamSize = this.state.missionTeamSize[numberOfPlayers];

    this.setState({
      playerCount: numberOfPlayers,
      setup: setup,
      teamSize: teamSize
    });
  }

  render() {
    return (
      <div>
        <select onChange={ (event) => this.selectNumberOfPlayers(event.target.value)}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <h3>Player Count</h3>
        Players: {this.state.playerCount}
        <br/>
        <h3>Setup</h3>
        <Setup setup={this.state.setup}></Setup>
        <h3>Team Sizes</h3>
        <TeamSize teamSize={this.state.teamSize}></TeamSize>
      </div>
    );
  }
}
