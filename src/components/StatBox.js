import React from 'react';
import 'styles/StatBox.css';

//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';


class StatBox extends React.Component {
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

        return (
            <div className='d-flex flex-column statBox w-100' onClick={this.rollStat}>
                <div>{name}</div>
                <div>{statValue}</div>
            </div>
        );
    }

    rollStat() {
        const statValue = this.props.statValue;
        const name = this.props.name;
        const result = Math.floor((Math.random() * 6)) + 1 + statValue;

        alert(`${name} -> 1d6+${statValue}\n${result}`);
    }

}

export default StatBox;