import React, {Component} from 'react';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className="board">
        <div className="zones">
          <div className="zone">
            <div className={this.props.winners[0] + " round"}>
              {
                this.props.teamSize[1]
              }
            </div>
            <div className={this.props.passes[0] + " fail"}>
              1
            </div>
          </div>
          <div className="zone">
            <div  className={this.props.winners[1] + " round"}>
              {
                this.props.teamSize[2]
              }
            </div>
            <div className={this.props.passes[1] + " fail"}>
              2
            </div>
          </div>
          <div className="zone">
            <div  className={this.props.winners[2] + " round"}>
              {
                this.props.teamSize[3]
              }
            </div>
            <div className={this.props.passes[2] + " fail"}>
              3
            </div>
          </div>
          <div className="zone">
            <div  className={this.props.winners[3] + " round"}>
              {
                this.props.teamSize[4]
              }
            </div>
            <div className={this.props.passes[3] + " fail"}>
              4
            </div>
          </div>
          <div className="zone">
            <div  className={this.props.winners[4] + " round"}>
              {
                this.props.teamSize[5]
              }
            </div>
            <div className={this.props.passes[4] + " fail"}>
              5
            </div>
          </div>
        </div>
        <div className="buttons">
          <h4 className="inline-block">Who Won? </h4>
          <button className="inline-block" type="button" onClick={this.props.resistance}>REBELS</button>
          <button className="inline-block" type="button" onClick={this.props.spies}>EMPIRE</button>
          <button className="inline-block" type="button" onClick={this.props.neither}>Neither</button>
        </div>
      </div>
    );
  }

}
