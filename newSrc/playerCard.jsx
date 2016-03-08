import React, {Component} from 'react';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div>
        Spies: {this.props.setup.spies}
        <br/>
        Resistance: {this.props.setup.resistance}
        <br/>
      </div>
    );
  }

}
