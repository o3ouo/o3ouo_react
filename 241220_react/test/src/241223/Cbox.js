import React, { Component } from 'react';

class Cbox extends Component {
  render() {
    let {name, age, children} = this.props;
    // 비 구조화 할당으로 props 추출
    // this.props.name 이런 식으로 사용하기 싫을 때 이렇게 설정해서 해당 요소에 name만 줌

    return (
      <div>
        {/* <h1>{this.props.name}</h1>
        <p>{this.props.age}</p> */}

        <h1>{name}</h1>
        <p>{age}</p>
        <p>{children}</p>
        
      </div>
    )
  }
}

Cbox.defaultProps = {
  name : "이름",
  age : "나이",
}

export default Cbox;