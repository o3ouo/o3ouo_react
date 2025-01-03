import React, { useState, useEffect } from 'react';

function Counter() {

  // 다음 코드에서 useEffect의 역할은 무엇이며, 만약 count가 3일 때만 console.log를 출력하게 만들려면 어떻게 수정해야 할까요?

  // Q. useEffect는 무엇을 수행하고 있나요?
  // A. count를 증가시키는 이벤트를 업데이트 하고 있음

  // count가 3일 때만 console.log가 출력되도록 코드를 수정해보세요.

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (count === 3) {
      console.log('Count has changed:', count);
    }
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

/*
********************************************************************* 챗GPT 풀이

* useEffect는 기본적으로 컴포넌트가 렌더링될 때마다 실행된다. 
* useEffect에 두 번째 인자를 전달해서 특정 상태가 변경될 때만 useEffect가 실행되도록 만들 수 있다.
* 이를 통해 불필요한 렌더링을 방지할 수 있다.
*/ 