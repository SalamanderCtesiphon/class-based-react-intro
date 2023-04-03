import './App.css';
import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MyComponent title = "React" />
      </div>
    );
  }
 
}

export default App;
