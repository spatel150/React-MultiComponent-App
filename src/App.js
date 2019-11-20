import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent1 from './components/FormComponent1';
import FormComponent2 from './components/FormComponent2';
import FormComponent3 from './components/FormComponent3';
import DisplayText1 from './components/DisplayText1';
import DisplayText2 from './components/DisplayText2';
import DisplayText3 from './components/DisplayText3';

class App extends Component {

  constructor(props) {
    super(props) 
      this.state = {
        text1: " ",
        text2: " ",
        text3: " ",
      }
    }

  callback1 = (data) => {
    this.setState({
      text1: data
    })
  }

  callback2 = (data) => {
    this.setState({
      text2: data
    })
  }

  callback3 = (data) => {
    this.setState({
      text3: data
    })
  }

  render() {
    return (
      <div className="App">
        <FormComponent1 call1={this.callback1} />
        <br />
        <FormComponent2 call2={this.callback2} />
        <FormComponent3 call3={this.callback3} />
        <DisplayText1 text1= {this.state.text1} />
        <DisplayText2 text2={this.state.text2} />
        <DisplayText3 text3={this.state.text3} />
      </div>
    )
  }
}

export default App;
