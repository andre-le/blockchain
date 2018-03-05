import React, { Component } from 'react';
import './App.css';
import { Icon, Input, Label } from 'semantic-ui-react'
import SearchExampleStandard from './SearchExampleStandard'
import './style1.css';

const resultRenderer = ({ title }) => <Label content={title} />

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchExampleStandard resultRenderer={resultRenderer} source={this.props.source}/>
      </div>
    );
  }
}

export default App;
