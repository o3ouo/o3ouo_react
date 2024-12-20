// 클래스형 컴포넌트를 사용할 때에는 꼭 사용해야함
import { Component } from "react";

// 클래스형 컴포넌트
class Class extends Component {
  constructor(props) {
    super(props) // super로 부모의 값을 가지고 와야함
    this.name = "안농"
  }

  render() {
    return(
      <div>
        <h2> 클래스형 컴포넌트 제작 {this.name}</h2>
        <Box name = "Yoo" />
      </div>
    )
  }
}

// 함수형 컴포넌트
function Box(props) {
  return(
    <div>
      <h2>My Name is {props.name}</h2>
    </div>
  )
}

export default Class;