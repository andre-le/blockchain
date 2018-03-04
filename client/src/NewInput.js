import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      buildingName: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <h1>Submit An Asset</h1>
        <label>
          Company:
          <input
            name="company"
            type="string"
            value={this.state.company}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Building:
          <input
            name="buildingName"
            type="string"
            value={this.state.buildingName}
            onChange={this.handleInputChange} />
        </label>
        <h2>Verification Document</h2>
        <label>
          Insurance:
          <input
            type="file" />
        </label>
        <br />
        <label>
          Insurance:
          <input
            type="file" />
        </label>
        <br />
        <label>
          Public Record:
          <input
            type="file" />
        </label>
        <br />
        <label>
          Asset ID:
          <input
            type="file" />
        </label>
        <br />
        <label>
          Invoice:
          <input
            type="file" />
        </label>
        <br />
        <label>
          Depreciation:
          <input
            type="file" />
        </label>
        <br />
        <label>
          Life Cycle:
          <input
            type="file" />
        </label>
        <br />
      </form>
    );
  }
}

export default NewInput;
