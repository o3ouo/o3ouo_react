import React, { Component } from 'react';

class BoxClass extends Component {

  componentWillUnmoount() {
    console.log("componentWillUnmount"+":"+"끝")
  }

  render() {
    return (
      <div>
        <h2>box:{this.props.num}</h2>
      </div>
    )
  }
}

export default BoxClass;