import React, { Component } from 'react';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      arr: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ text: '', arr: [...this.state.arr, this.state.text] }, () =>
      console.log(this.state.arr)
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button onClick={this.handleClick}>click</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
