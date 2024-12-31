import React, {useReducer} from 'react';
import './css/Event.css'

// useReducer : state 상태관리 로직을 컴포넌트 외부로 분리하여 더 구조적이고 선언적인 방식으로 관리
// 복잡한 상태 관리가 필요한 경우
// const [state(현재 상태값), dispatch(상태 업데이트를 트리거하는 함수)] = useReducer(reduce(상태를 업데이트 함수), in~(초기값))

/*
  *useState와 useReducer의 차이
  > useState
  복잡성
  상태구조
  업데이트 방식
  사용 사례

*/

function reducer(state, action) {
  console.log(state, action);

  // 불리언, 상태? 경우? 모두 넣을 수 있다
  switch(action.type) {
    case "plus" :
      return {count : state.count + 1};
    case "minus" :
      return {count : state.count -1};
    case "reset" :
      return {count : 0};
    default :
      console.log("오류")
  }

}

function Ureducer() {

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <h1>카운트 : {state.count}</h1>
      <button type="button" onClick={() => dispatch({type: "plus"})}>증가</button>
      <button type="button" onClick={() => dispatch({type: "minus"})}>감소</button>
      <button type="button" onClick={() => dispatch({type: "reset"})}>초기화</button>

      <table>
        <tr>
          <th>특징</th>
          <th>useState</th>
          <th>useReducer</th>
        </tr>
        <tr>
          <th>복잡성</th>
          <td>간단하고 직관적이며, 독립적인 상태 관리에 적합</td>
          <td>복잡한 상태 전환 로직이나 여러 관련 상태를 관리하는데 적합</td>
        </tr>
        <tr>
          <th>상태구조</th>
          <td>단일 상태 값(문자열, 숫자, 불리언 등) 또는 간단한 객체 / 배열에 적합</td>
          <td>상태가 병이나 객체로 구성되며, 여러 속성이 서로 연관된 경우 적합</td>
        </tr>
        <tr>
          <th>업데이트 방식</th>
          <td>setState 함수로 직접 업데이트하며, 새로운 값을 전달하거나 함수형 업데이트를 사용</td>
          <td>dispatch(action)을 통해 리듀서 함수에서 상태 업데이트 로직을 처리</td>
        </tr>
        <tr>
          <th>사용 사례</th>
          <td>
            - 독립적인 상태 <br />
            - 간단한 상태 전환 <br />
            - 상태가 이전 값에 의존하지 않는 경우
          </td>
          <td>
            - 복잡한 상태 전환 <br />
            - 여러 관련 상태를 하나의 객체로 관리 <br />
            - 이전 상태에 의존하는 로직
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Ureducer;