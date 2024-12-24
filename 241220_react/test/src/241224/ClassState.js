import React, {Component} from 'react'

// constructor : 생성자 (매개변수를 받아옴)
// super : 부모의 값을 그대로 가져오고 싶을 때

class ClassState extends Component {
  constructor(props) {
    super(props);
    // 초기 설정 상태
    this.state = {
      count : 0,
    }
    // 기본적으로 class형에서 state를 사용하는 방법
  }

  // constructor 뒤에 메서드 제작
  plus = () => {

    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });      
    }

    // 삼항연산자 사용
    // this.setState( (p) => ( { count : p.count < 10 ? p.count + 1 : p.count } ) );
  }
  
  Minus = () => {

    if (this.state.count > 0) {
      this.setState({ count: this.state.count -1 });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button type="button" onClick={this.plus}>Plus Click !</button>
        <button type="button" onClick={this.Minus}>Minus Click !</button>
        {/* class형에서 해당 값을 불러올 때에는 무조건 this를 사용해야 한다 */}
      </div>
    )
  }
}

export default ClassState;