import React, { Component, useState } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      fullName: "Marwen Bennaceur",
       bio: "Veteren Graphic designer and amateur web developper",
        imgSrc: "1.png",
         profession: "Graphic_designer",
          shows: true
    }
    
  }
  render() {
    return (
      
      <div className="Container">
        <img className="img" src={this.state.imgSrc} alt="0" />
        <p>Full name:</p>
        <h1>{this.state.fullName}</h1>
        <p>Bio:</p>
        <h1>{this.state.bio}</h1>
        <p>Profession:</p>
        <h1>{this.state.profession}</h1>
        <button onClick={() => this.setState({})}>
          
        </button>
      </div> 
    );
  }
}

export default App;
