import React, { Component, useState } from "react";
import './App.css';
import { useEffect } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      fullName: "Marwen Bennaceur",
      bio: "Veteren Graphic designer and amateur web developper",
      imgSrc: "1.png",
      profession: "Graphic_designer",
      shows: true,
      count: 0,
      intervalId: 0
    }}

    componentDidMount() {
     this.setState({ intervalId:setInterval(() => {
      this.setState({count:this.state.count+1});
    }, 1000)})}


    componentWillUnmount(){
      clearInterval(this.state.intervalId);
    }

toggle() {
  this.setState({ shows: !this.state.shows })
  if (!this.state.shows) {
    this.setState({count:0});
  }
}

  render() {
    return (
      <>
      <div  className="Container">
        </div>
        
        {this.state.shows ? 

          <div className="box">
          <img className="img" src={this.state.imgSrc} alt="0" />
          <p>Full name:</p>
          <h1>{this.state.fullName}</h1>
          <p>Bio:</p>
          <h1>{this.state.bio}</h1>
          <p>Profession:</p>
          <h1>{this.state.profession}</h1>

          </div>
         : <h2 className="counter">Counter : {this.state.count} </h2>}
        <button className="btn" onClick={() =>this.toggle() }>
          Click me
        </button>
        {/* <h2 className="counter">Counter : {this.state.count} </h2> */}
        </>
      
    );
  }
}

export default App;