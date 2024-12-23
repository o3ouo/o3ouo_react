// 클래스형 컴포넌트를 사용할 때에는 꼭 사용해야함
import { Component } from "react";
import Cbox from "./Cbox";

class ClassProps extends Component {
  render() {
    return(
      <div>
        <Cbox name="아롱" age={12}/>
        <Cbox name="아롱" age={16}/>
        <Cbox>설명</Cbox>
      </div>
    )
  }
}

export default ClassProps;