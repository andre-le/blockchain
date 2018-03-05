import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App"
import AssetList from "./AssetList"

class Root extends Component {    
  state = {
    source: []
  }

  componentDidMount() {
    fetch("/chain").then(res => res.json()).then(res => {this.setState({source: res.chain.filter((b) => b.index != 1)})})
  }

    render(){
        //console.log(this.state.source);
        return(
            <Router>
                <div>
                    <Route exact path="/" render={(props) => (<App source={this.state.source} {...props} />)} />
                    <Route path="/list/:id" render={(props) => (<AssetList source={this.state.source} {...props} />)} />    
                </div>        
            </Router>
        )
    }
}

export default Root