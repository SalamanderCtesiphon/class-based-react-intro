import './App.css';
import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {

    return (
      <div className="App">
        <MyComponent title="React" onButtonClicked={this.onClickBtn}/>
      </div>
    );
  }
 
}

export default App;
