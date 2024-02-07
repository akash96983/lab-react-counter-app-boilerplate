import React, { Component } from 'react';
import './App.css';

export class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1 className="head">COUNTER APP</h1>
        <br />
        <p id="value">{this.state.count}</p>
        <br />
        <div id="operations">
          <button id="decrease" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
          <button id="increase" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
          <button id="reset" onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;