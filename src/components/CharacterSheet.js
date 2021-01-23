import React from 'react';
//import Button from './Button'; // Import a component from another file
import { Button } from 'react-bootstrap'
import $ from 'jquery';
import HealthBarRow from 'components/HealthBarRow.js';
import StatRow from 'components/StatRow.js';
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
            <div className='m-2 p-2 border border-dark' style={{ backgroundImage: `url(${canvas}` }}>
                <h1 className='text-center'>{this.props.characterJson.name}</h1>
                <HealthBarRow maxHp={this.props.characterJson.stats.maxHp} />
                <StatRow name='Defense' statValue={this.props.characterJson.stats.defense} />

                <div className='d-flex flex-column my-4'>
                    <StatRow name='Nimble' statValue={this.props.characterJson.stats.nimble} />
                    <StatRow name='Mind' statValue={this.props.characterJson.stats.mind} />
                    <StatRow name='Brawn' statValue={this.props.characterJson.stats.brawn} />
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