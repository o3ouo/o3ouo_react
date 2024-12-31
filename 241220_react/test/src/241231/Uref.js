
import React, {useRef, useState} from 'react';

// DOM 요소에 직접 접근할 때 사용하는 훅
// state와 달리 값이 변경되어도 컴포넌트가 다시 렌더링되지 않는다.

function Uref() {

  const inputRef = useRef(null); // DOM 요소를 참조할 변수 생성

  const focus = () => {
    inputRef.current.focus();
  }

  const [count, setCount] =useState(0) // 렌더링 되는 상태
  const clickC = useRef(0); // 렌더링 되지 않는 값

  const onClick = () => {
    setCount(count + 1);
    clickC.current += 1;
    console.log(count)
  }

  return          (                                                        
    <div>
      <input type="text" ref={inputRef}/>
      <button type="button" onClick={focus}>Click!</button>
      <br /><br /><br />
      <h2>카운트 : {clickC.current}</h2>
      <button type="button" onClick={onClick}>Click!</button>
    </div>
);
}

export default Uref;