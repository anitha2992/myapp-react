
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    name: "Google",
  }

  nameInputHandler = (event) =>{
    this.setState({
      name:event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This is my First React Assignment</h1>
        <p>Hope it comes out well!!</p>
        <UserInput
          changed = {this.nameInputHandler.bind(this)}>
        </UserInput>
        <UserOutput
          content =  {this.state.name   + "   Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock."} >
        </UserOutput>
        <UserOutput
            content = {"Anitha"}>
        </UserOutput>
      </div>
    );
  }
}

export default App;
