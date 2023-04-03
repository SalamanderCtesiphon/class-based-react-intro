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
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {

    return (
      <div className="App">
        <MyComponent title="React" onButtonClicked={this.onClickBtn}/>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
 
}

export default App;
