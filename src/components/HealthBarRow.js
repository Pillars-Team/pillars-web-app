import React from 'react';
//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';

const barStyle = {
    width: '100%',
    backgroundColor: 'grey'
};

let progressStyle = {
    width: '100%',
    backgroundColor: '#b1000d',
    textAlign: 'center', /* To center it horizontally (if you want) */
    lineHeight: '175%',
    color: 'white',
    height: '100%',
    transition: 'width 1s'
};

class HealthBarRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { currentHp: this.props.maxHp }

        this.changeHealth = this.changeHealth.bind(this);
    }

    // componentDidMount() {
    //   //this.setState({currPower: '---'});
    // }

    render() {
        return (
            // <div className='d-flex flex-column'>
            //     <div id="" style={barStyle}>
            //         <div id="progressSection" style={progressStyle}>
            //             {this.state.currentHp}
            //         </div>
            //     </div>
            //     <div className='text-left mt-1'>
            //         <button className='mr-1' onClick={() => this.changeHealth(-5)}>-5</button>
            //         <button className='mx-1' onClick={() => this.changeHealth(-1)}>-1</button>
            //         <button className='mx-1' onClick={() => this.changeHealth(1)}>+1</button>
            //         <button className='mx-1' onClick={() => this.changeHealth(5)}>+5</button>
            //     </div>
            // </div>
            <div className='d-flex flex-row'>
                <button className='mr-1' onClick={() => this.changeHealth(-5)}>-5</button>
                <button className='mr-1' onClick={() => this.changeHealth(-1)}>-1</button>
                <div id="" style={barStyle}>
                    <div id="progressSection" style={progressStyle}>
                        {this.state.currentHp}
                    </div>
                </div>
                <button className='ml-1' onClick={() => this.changeHealth(1)}>+1</button>
                <button className='ml-1' onClick={() => this.changeHealth(5)}>+5</button>
                {/* <div className='text-left mt-1'>
                    
                    
                </div> */}
            </div>
        );
    }

    changeHealth(i) {
        const maxHp = this.props.maxHp;

        if (this.state.currentHp + i > maxHp) {
            $('#progressSection').width('100%');
            $('#progressSection').css('background-color', 'purple');
        }
        else {
            $('#progressSection').width(`${(this.state.currentHp + i) / maxHp * 100}%`);
            $('#progressSection').css('background-color', '#b1000d');
        }
        this.setState(state => ({ currentHp: state.currentHp + i }));
    }

}

export default HealthBarRow;