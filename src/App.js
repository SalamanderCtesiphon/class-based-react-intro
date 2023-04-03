import './App.css';
import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button Clicked!');
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {

    return (
      <div className="App">
        <MyComponent title="React" onButtonClicked={this.onClickBtn}/>
        <button onClick={this.countUp}>Increment Count</button>
        <button onClick={this.countDown}>Decrement Count</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
 
}

export default App;
