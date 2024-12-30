import React, { Component } from 'react'
import BoxClass from './BoxClass';

/* 
LIfeCycle

생성(componentDidMount) 
: UI 전체를 완성, UI가 전체 완성되었을 때 UI 렌더를 끝낸 후 데이터 값을 받아옴(API call)
업데이트(componentDidUdate)
: 상태만 확인(함수 사용이 잘 되었는지?)
: state가 최신 업데이트한 값을 출력 시 
: satae가 업데이트 된 후에(최신 업데이트 값으로) 작업을 해야할 때 이 공간을 활용
제거(componentWillUnmount) 
: 종료

LifeCycle 실행순서

constructor > render > componentDidMount


// getDreivedStateFromProps: state, props 값을 동기화
// shouldComponentUpdate: 렌더 할/말 여부 
*/


// 클래스컴포넌트에서는 UseState를 사용하지 못함
class ClassCount extends Component {


// 상태를 관리하기 위한 생성자 만들기
  constructor(props) {
    super(props)   //부모로부터 props 값을 받아오기
    this.state = {
      count: 0,
      value: 1
    }   //객체 만들기

    console.log("constructor")
    // 콘솔창에서 제일 첫번째로 호출 (라이프사이클순서세요~ ㅎ constructor > render > componentDidMount)
  }

  plus = () => {
    this.setState({
      count: this.state.count + 1,
      value: this.state.value +2
    });
    console.log(this.state)
  }

  min = () => {
    this.setState({
      count: this.state.count - 1,
      value: this.state.count -2
    });
  }

  componentDidMount(){
    console.log("componentDidMount")
    // UI가 완성됐을 때~ ,API 콜
    // UI 렌더를 끝낸 후에 데이터를 받아와라~
  }
  componentDidUpdate(){
    console.log("componentDidUpdate",this.state);
  }

  render() {
    console.log("render")
    // 렌더가 두번째로 실행
    return (
      <div>
        {/* 버튼 클릭 시 1씩 증가, 수의 값은 props로 전달받기 */}
        {/* 
      <div>
      <h2>{this.state.count}</h2>
       <button type="button" onClick={this.plus}>++ CLICK!!</button>
       <button type="button" onClick={this.min}>-- CLICK!!</button>
     </div>
      */}

        <h1>state:{ this.state.count}</h1>
        <button type='button' onClick={this.plus}>!!Click!!</button>
        {
          this.state.value < 12 && <BoxClass num={this.state.value} />
        }

      </div>
    )
  }
}

export default ClassCount;