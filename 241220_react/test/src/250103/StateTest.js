import React, {useState} from 'react';

function StateTest() {

  const [number, setNumber] = useState(0);

  const plus = () => {

    if (number < 10) {
      setNumber(number +1);
    } else {
      alert `10 이상의 숫자는 불가능임`;
    }
  }

  const reset = () => {
    setNumber(0);
  }

  // React에서 disabled 속성 동적 제어
  // > 조건에 따라 값이 true이면 비활성화되고, false이면 활성화된다.
  const [isDisabled, setIsDisabled] = useState(true);



  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button type="button" onClick={plus}>Plus</button>
      <button type="button" onClick={reset}>Reset</button>

      <br /><br /><br />

      <button 
        onClick={() => alert("활성화된 버튼 클릭!")} 
        disabled={isDisabled}
      >
        버튼
      </button>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? "활성화" : "비활성화"}
      </button>
    </div>
  );
}

export default StateTest;


/*
********************************************************************* 챗GPT 풀이

* disabled : HTML 요소의 속성(attribute) 중 하나로, 주로 **버튼이나 입력 필드(input, textarea 등)** 에서 해당 요소를 비활성화(disable)할 때 사용된다.
> 역할 : disabled 속성이 설정된 요소는 클릭하거나 값을 입력하는 등의 상호작용이 불가능하다.
> 또한, 브라우저에서 기본적으로 **비활성화된 요소의 스타일(흐릿하게 표시 등)** 을 적용합니다.

import React, { useState } from "react";

function StateTest() {
  const [number, setNumber] = useState(0);

  const plus = () => {
    if (number < 10) {
      setNumber((prev) => prev + 1);
    }
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>숫자: {number}</h1>
      {number >= 10 && <p style={{ color: "red" }}>더 이상 증가할 수 없습니다!</p>}
      <button type="button" onClick={plus} disabled={number >= 10}>
        Plus
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default StateTest;



*/ 