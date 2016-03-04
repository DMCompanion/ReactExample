import React, { Component } from 'react';
import Setup from './setup';
import TeamSize from './teamSize';
import GameBoard from './gameBoard';

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
      teamSize: {1:2, 2:3, 3:2, 4:3, 5:3},
      players: []
    };

    this.selectNumberOfPlayers = this.selectNumberOfPlayers.bind(this);
    this.startGame = this.startGame.bind(this);
    this.shuffle = this.shuffle.bind(this);

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

  startGame(){
    console.log('Starting Game');
    var players = [];
    var roles = [];
    for (var i = 0; i < this.state.playerCount; i++) {
      players.push({
        name: 'Player ' + i + 1,
        leader: false,
        role: '',
        cards: []
      });
    }

    for (var j = 0; j < this.state.setup.resistance; j++) {
      roles.push('Resistance');
    }
    for (var k = 0; k < this.state.setup.spies; k++) {
      roles.push('Spy');
    }

    roles = this.shuffle(roles);
    console.log(roles);

    for (var l = 0; l < players.length; l++) {
      players[l].role = roles[l];
    }
    console.log(players);

    this.setState({
      players: players
    });

    console.log(this.state.players);
  }

  shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }


  render() {
    return (
      <div>

        <h1>THE RESISTANCE</h1>

        <div className="sideBar">
          <h3>Select number of players</h3>
          <select onChange={ (event) => this.selectNumberOfPlayers(event.target.value)}>
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

          <button className="myButton" onClick={this.startGame}>Start Game</button>
        </div>
      </div>
    );
  }
}
