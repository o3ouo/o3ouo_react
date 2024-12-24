import React from 'react';
import {useState} from 'react';

function State_ex_01() {

  let count = 0;
  let [count2, setCount2] = useState(0)
  // count2에는 useState(0)의 값이 들어가있음
  // setCount2에는 함수(업데이트 하기 위한)가 들어가있음

  const plus = () => {
    count++;
    // count의 값이 늘어나고 있지만, 일반 변수에 값이 변해도 UI는 업데이트 되지 않는다. 그렇기 때문에 State를 사용함.

    setCount2(count2 + 1);
    // setCount2()의 괄호 안에 업데이트를 실행할 내용을 작성

    console.log("count:" + count);
    // 스테이트가 리렌더링이 되기 때문에 카운트는 1증가 했다가 다시 0으로 되돌아가는 것을 반복하기 때문에 콘솔에는 1만 찍혀서 나온다. (저장이 되지 않은 상태)

    console.log("count2:" + count2);
    // state를 했을 때 비동기적으로 작업을 하기 때문에 state를 할 시간이 필요. 
    // state라는 함수 안에 plus라는 함수를 실행을 시켰을 때 콘솔에 0이 찍히고 화면엔 1이 나타나는 이유는 아직 state 함수가 끝나지 않았기 때문 (아직 업데이트 전)
    // 이 비동기적 문제를 해결하기 위해선 훅을 사용해야 한다

    // state를 사용했을 때 위의 순서
    // 1. 유저가 버튼을 클릭
    // 2. count + 1 해서 > count는 1이 됨
    // 3. setState 함수 호출
    // 4. console 실행
    // 변수 값은 1로 보이고 state 값은 아직 변하지 않았기 때문에 초기값이 보인다.
    // 5. 함수가 종료
    // 6. 함수가 다시 실행됨 (리렌더 or 리렌더링)
    // 7. count = 0;을 거치면서 다시 초기화가 됨
    // 8. state 값은 update가 되면서 다시 렌더링한다.
  }

  return (

    <div>
      {/* 
      State : 상태 변수를 정의하고 업데이트 하는 데에 사용 (업데이트 될 내용을 저장하고 리렌더링하는 작업을 수행)

      const [state, setState] = useState(현재 상태의 초기값)
      state : 현재 상태값
      setState : 상태를 업데이트 하기 위한 함수를 정의하는 공간

      - react에서 State를 사용하기 위해서는 useState라는 함수를 가지고 와야한다.
      - 이러한 함수들을 'Hook'이라고 한다. / react를 좀 더 쉽게 사용하기 위한 함수들.

      - 변경할 요소를 State에 담아서 사용
      - let 또는 const 모두 사용 가능

      - state의 값은 일반 변수처럼 변경할 수 없다 (재할당 불가능)

      - 일반 자바스크립트에서는 객체로 할당을 하고 재할당 했을 때 새롭게 스크립트를 읽기 때문에 UI를 도출하는 기능이 비쌈 ()
      - 원하는 기능만 담아서 해당 요소만 업데이트를 하기 때문에 훨씬 빠르고 유용하다

      */}

      <h2>{count} : 일반변수</h2>
      <h2>{count2} : State</h2>
      <button type="button" onClick={plus}>클릭!</button>
      {/* onClick : 클릭 이벤트 (내부 이벤트 핸들러) */}

    </div>
  )
}

export default State_ex_01;