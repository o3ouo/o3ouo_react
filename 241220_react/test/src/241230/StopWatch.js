import React, { Component } from 'react';

class StopWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: false,
    }
  }

  timer = () => {
    if (!this.state.start) {
      // timerId라는 변수를 만들어 setInterval을 담을 것임 / 반환값을 변수에 저장해야 이후에 clearInterval로 멈출 수 있음
      this.timerId = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
      this.setState({ start: true });
    }
  };

  // componentDidUpdate()를 사용해 업데이트가 된 상태를 확인할 수 있음
  componentDidUpdate() {
    console.log(this.state.start);
  }

  clear = () => {
    if (this.state.start) {
      clearInterval(this.timerId);
      this.setState({ start: false });
    }
  };

  reset = () => {
    clearInterval(this.timerId);
    this.setState({ time: 0, start: false });
  }

  // 컴포넌트가 종료될 때 timerId 정리 메모리 누수를 방지
  componentWillUnmount() {
    clearInterval(this.timerId);
  };

  render() {
    const {time} = this.state;
    // this를 생략할 수 있는 방법

    return (
      <div>
        <h1>StopWatch</h1>
        <p>Time: {time} seconds</p>
        <button type="button" onClick={this.timer}>Start</button>
        <button type="button" onClick={this.clear}>Stop</button>
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    )
  }

}

export default StopWatch;
