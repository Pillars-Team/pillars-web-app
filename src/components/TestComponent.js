import React from 'react';
import 'styles/TestComponent.css';

//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';


class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { roll: '' };


    }

    // componentDidMount() {
    //   //this.setState({currPower: '---'});
    // }

    render() {
        const statValue = this.props.statValue;
        const name = this.props.name;

        let blocks = [...Array(statValue)];


        return (
            <></>
        );
    }

    // rollStat() {
    //     const statValue = this.props.statValue;
    //     const result = Math.floor((Math.random() * 6)) + 1 + statValue;

    //     this.setState({roll: <div className='d-flex flex-row'><div className="spinText">&#127922;</div>+{statValue}</div>});
    //     setTimeout(() => {this.setState({roll: result}) }, 2000);
    //     setTimeout(() => {this.setState({roll: ''}) }, 6000);
    // }

}

export default TestComponent;