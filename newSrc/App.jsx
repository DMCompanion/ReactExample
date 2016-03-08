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

      round: 0,
      pass: 0,
      winners: ['', '', '', '', ''],
      passes: ['', '', '', '', ''],

      playerCount: 5,
      setup: {resistance: 3, spies: 2},
      teamSize: {1:2, 2:3, 3:2, 4:3, 5:3},
      players: []
    };

    this.selectNumberOfPlayers = this.selectNumberOfPlayers.bind(this);
    this.startGame = this.startGame.bind(this);
    this.shuffle = this.shuffle.bind(this);

    this.resistance = this.resistance.bind(this);
    this.spies = this.spies.bind(this);
    this.neither = this.neither.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
    this.resetPasses = this.resetPasses.bind(this);

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

  resistance() {
    console.log('The REBELS won this round');
    var winners = this.state.winners;
    var round = this.state.round;

    winners[round] = 'resistance';
    round++;

    this.setState({
      winners: winners,
      round: round
    });

    var self = this;

    setTimeout(function() {
      self.checkForWinner();
      self.resetPasses();
    }, 500);
  }

  spies() {
    console.log('The EMPIRE won this round');
    var winners = this.state.winners;
    var round = this.state.round;

    winners[round] = 'spy';
    round++;

    this.setState({
      winners: winners,
      round: round
    });

    var self = this;

    setTimeout(function() {
      self.checkForWinner();
      self.resetPasses();
    }, 500);
  }

  neither() {
    console.log('Neither Team won this round');
    var passes = this.state.passes;
    var pass = this.state.pass;
    var round = this.state.round;
    var winners = this.state.winners;
    if (pass < 4) {
      passes[pass] = 'pass';
      pass = pass + 1;
      this.setState({
        passes: passes,
        pass: pass
      });
    } else {
      passes[pass] = 'pass';
      pass = pass + 1;
      this.setState({
        passes: passes,
        pass: pass
      });
      var self = this;
      setTimeout(function() {
        alert('The Empire wins this round!');
        self.resetPasses();
        winners[round] = 'spy';
        round++;
        self.setState({
          round: round,
          winners: winners
        });
        self.checkForWinner();
      }, 100);
    }
  }

  checkForWinner() {
    console.log('Checking For Winner');

    var winners = this.state.winners;
    var round = this.state.round;
    var resistance = 0;
    var spies = 0;

    if (round > 2) {
      for (var i = 0; i < winners.length; i++) {
        if (winners[i] === 'resistance') {
          resistance++;
        }
        if (winners[i] === 'spy') {
          spies++;
        }
      }
      if (spies === 3) {
        alert('The Empire is victorious!');
        this.resetPasses();
        this.resetWinners();
      } else if (resistance === 3) {
        alert('The Resistance has won!');
        this.resetPasses();
        this.resetWinners();
      }
    }
  }

  resetPasses() {
    this.setState({
      passes: ['', '', '', '', ''],
      pass: 0
    });
  }

  resetWinners() {
    var winners = ['', '', '', '', ''];
    var round = 0;
    this.setState({
      winners: winners,
      round: round
    });
  }

  render() {
    return (
      <div>

        <h1>THE REBEL ALLIANCE</h1>

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

          <button onClick={this.startGame}>Start Game</button>
        </div>
        <div className="playArea">
          <GameBoard teamSize={this.state.teamSize} winners={this.state.winners} passes={this.state.passes} resistance={this.resistance} spies={this.spies} neither={this.neither}></GameBoard>
        </div>
      </div>
    );
  }
}
