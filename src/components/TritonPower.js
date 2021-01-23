import React from 'react';
//import Button from './Button'; // Import a component from another file

const powerDescriptions = [
  'Mover: Can hop into water and then teleport out of the water within visual distance.',
  'Shaker: Can control the state of water in an area.',
  'Thinker: Can send out a mental pulse to sense water in a 50 ft radius.',
  'Brute: Can create a water bubble around themselves to protect them. They are immersed and must hold their breath while using this.',
  'Blaster: Water gun.',
  'Master: Can create a water echo of him that follows a simple mental directive.',
  'Striker: Can deal a blow to an enemy by collecting water on his hand and striking an enemy. As the enemy is hit, he turns the water into steam. (+1 to Brawn rolls for this ability)',
  'Changer: Can turn a part of himself into water to cushion a blow. This can only be done as a reaction to a blow by instinct. This power cannot be activated on demand.'
];

class TritonPower extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currPower: '---' }
    this.SetRandomPower = this.SetRandomPower.bind(this);
    this.SetPower = this.SetPower.bind(this);
  }

  // componentDidMount() {
  //   //this.setState({currPower: '---'});
  // }

  render() {
    return (
      <div className="d-flex flex-row">
        <button type="button" className="btn btn-primary p-2 m-2" onClick={this.SetRandomPower}>Random Power</button>
        <div className="dropdown">
          <button className="btn btn-info dropdown-toggle p-2 my-2 mr-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Power
      </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={() => this.SetPower(0)}>Mover - teleport</a>
            <a className="dropdown-item" onClick={() => this.SetPower(1)}>Shaker - state change</a>
            <a className="dropdown-item" onClick={() => this.SetPower(2)}>Thinker - sonar</a>
            <a className="dropdown-item" onClick={() => this.SetPower(3)}>Brute - bubble</a>

            <a className="dropdown-item" onClick={() => this.SetPower(4)}>Blaster - water gun</a>
            <a className="dropdown-item" onClick={() => this.SetPower(5)}>Master - water echo</a>
            <a className="dropdown-item" onClick={() => this.SetPower(6)}>Striker - steam punch</a>
            <a className="dropdown-item" onClick={() => this.SetPower(7)}>Changer - water body</a>
          </div>
        </div>
        <div className="p-2 m-2 bg-secondary" id="powerDescription">{this.state.currPower}</div>
      </div>
    );
  }

  SetPower(i) {
    let powerStr = powerDescriptions[i];
    this.setState({ currPower: powerStr });
  }

  SetRandomPower() {
    let powerStr = powerDescriptions[Math.floor((Math.random() * 8))];
    this.setState({ currPower: powerStr });
  }

}

export default TritonPower;