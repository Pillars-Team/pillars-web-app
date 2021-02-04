import React from 'react';
//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';
import "styles/HealthBarRow.css"

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
    height: '30px',
    transition: 'width 1s',
    borderRadius: '0px, 10px, 10px, 0px'
};

class HealthBarRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            currentHp: this.props.maxHp,
            showButtons: false,
            pointStartX: 0,
            pointStartY: 0,
            pointEndX: 0,
            pointEndY: 0
        };

        this.changeHealth = this.changeHealth.bind(this);
        this.toggleButtons = this.toggleButtons.bind(this);

        this.mouseDownFn = this.mouseDownFn.bind(this);
        this.mouseUpFn = this.mouseUpFn.bind(this);
    }

    // componentDidMount() {
    //   //this.setState({currPower: '---'});
    // }

    render() {
        return (
            <div className='d-flex flex-row justify-content-center'>

                <div className="slidecontainer">
                    <p>Default range slider:</p>
                    <input type="range" min="1" max="100" value="50" />

                    <p>Custom range slider:</p>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                </div>


                {/* {this.state.showButtons && <button className='mr-1' onClick={() => this.changeHealth(-5)}>-5</button>}
                {this.state.showButtons && <button className='mr-1' onClick={() => this.changeHealth(-1)}>-1</button>}

                <div id="" style={barStyle} onClick={() => this.toggleButtons()} onMouseDown={(e) => this.mouseDownFn(e)} onMouseUp={(e) => this.mouseUpFn(e)}>
                    <div id="progressSection" style={progressStyle}>
                        {this.state.currentHp}
                    </div>
                </div>
                {this.state.showButtons && <button className='ml-1' onClick={() => this.changeHealth(1)}>+1</button>}
                {this.state.showButtons && <button className='ml-1' onClick={() => this.changeHealth(5)}>+5</button>} */}
            </div>
        );
    }


    mouseDownFn(e) {
        const x = e.clientX;
        const y = e.clientY;

        this.setState({
            pointStartX: x,
            pointStartY: y
        });

        console.log(`start\nx:${x}\ny:${y}`)
    }

    mouseUpFn(e) {
        const x0 = this.state.pointStartX;
        const y0 = this.state.pointStartY;
        const x1 = e.clientX;
        const y1 = e.clientY;

        this.setState({
            pointEndX: x1,
            pointEndY: y1
        });
        console.log(`end\nx:${x1}\ny:${y1}`)
    }

    toggleButtons() {
        //this.setState({showButtons: !this.state.showButtons});
    }

    changeHealth(i) {
        const maxHp = this.props.maxHp;
        const newHp = this.state.currentHp + i;
        const hpPercent = newHp / maxHp * 100;

        console.log('hpPercent', hpPercent);
        let widthPercent = hpPercent;

        if (hpPercent > 100) {
            widthPercent = '100';
            $('#progressSection').css('background-color', 'purple');
        }
        else {
            $('#progressSection').css('background-color', '#b1000d');
        }

        $('#progressSection').css('width', `${widthPercent}%`);


        this.setState(state => ({ currentHp: state.currentHp + i }));
    }

}

export default HealthBarRow;