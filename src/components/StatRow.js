import React from 'react';
import 'styles/StatRow.css';

//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';


class StatRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {roll: ''};

        this.rollStat = this.rollStat.bind(this);
        
    }

    // componentDidMount() {
    //   //this.setState({currPower: '---'});
    // }

    render() {
        const statValue = this.props.statValue;
        const name = this.props.name;

        let blocks = [...Array(statValue)];

        return (
            <div className='d-flex flex-row statRow' onClick={this.rollStat}>
                <div className='text-right col-2'>{name}</div>
                {blocks.map((index) => (
                    <div className='mr-1 my-1 statPip' key={index}></div>
                ))}
                <div className='ml-5 text-right' id=''>{this.state.roll}</div>
            </div>
        );
    }

    rollStat() {
        const statValue = this.props.statValue;
        const result = Math.floor((Math.random() * 6)) + 1 + statValue;

        this.setState({roll: <div className='d-flex flex-row'><div className="spinText">&#127922;</div>+{statValue}</div>});
        setTimeout(() => {this.setState({roll: result}) }, 2000);
        setTimeout(() => {this.setState({roll: ''}) }, 6000);
    }

}

export default StatRow;