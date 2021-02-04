import React from 'react';
//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';
import 'styles/CharacterSheet.css';
import HealthBarRow from 'components/HealthBarRow.js';
import StatBox from 'components/StatBox.js';

import canvas from "images/canvas.jpg";


class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            select: '',
            input: '',
            inputField: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getStatIfInJson = this.getStatIfInJson.bind(this);
    }

    // componentDidMount() {
    //   //this.setState({currPower: '---'});
    // }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getStatIfInJson() {
        const fieldName = this.state.inputField;
        const stats = this.props.characterJson.stats;

        return stats[fieldName];
    }

    render() {
        return (
            <div className='m-2 p-2' style={{ width: `300px`, border: 'purple 1px solid' }}>
                <h1 className='text-center'>{this.props.characterJson.name}</h1>
                <HealthBarRow maxHp={this.props.characterJson.stats.maxHp} />

                <div className='d-flex flex-row my-1'>
                    <StatBox name='Defense' statValue={this.props.characterJson.stats.defense} />
                    <StatBox name='Awareness' statValue={this.props.characterJson.stats.awareness} />
                </div>

                <div className='d-flex flex-row my-1'>
                    <StatBox name='Nimble' statValue={this.props.characterJson.stats.nimble} />
                    <StatBox name='Mind' statValue={this.props.characterJson.stats.mind} />
                    <StatBox name='Brawn' statValue={this.props.characterJson.stats.brawn} />
                </div>

                <div className='d-flex flex-row'>
                    <div className='text-right'>{'actions: '}</div>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{ width: '33%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <input name='inputField' type="text" value={this.state.inputField} onChange={this.handleInputChange} />
                <div>{this.getStatIfInJson()}</div>

                <select name='select' type='text' value={this.state.select} onChange={this.handleInputChange}>
                    <option value=''></option>
                    <option value='attack'>attack</option>
                    <option value='block'>block</option>
                    <option value='hinder'>hinder</option>
                    <option value='help'>help</option>
                    <option value='study'>study</option>
                </select>
                <div>{this.state.select}</div>
            </div>
        );
    }
}

export default CharacterSheet;