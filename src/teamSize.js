import React, {Component} from 'react';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div>
        Turn 1: {this.props.teamSize[1]}
        <br/>
        Turn 2: {this.props.teamSize[2]}
        <br/>
        Turn 3: {this.props.teamSize[3]}
        <br/>
        Turn 4: {this.props.teamSize[4]}
        <br/>
        Turn 5: {this.props.teamSize[5]}
      </div>
    );
  }

}
