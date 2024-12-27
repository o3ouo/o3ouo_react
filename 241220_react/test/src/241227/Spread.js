import React, {useState} from 'react';

function Spread() {

  const [user, setUser] = useState({name: "유", age: 20, sex: "women"});
  console.log(user);

  const [array, setArray] = useState([1,3,4]);
  console.log(array);

  function Box () {

    // setUser({age:40}) 
    // > 이름과 성별의 정보는 사라지고 {age: 40}만 남음

    setUser({...user, age: 10, iq: 300});
    // 객체의 키값을 추가하거나 하나의 값만 변경하고 싶을 때 사용할 수 있다

    setArray([1,2,3,4,5,6]);
    // 기존 값이 초기화 되고 새로운 값이 입력된다.
    
    setArray([...array, 5, 5, 5])
    // 하지만 spread를 사용하면 기존 값에 새로운 값을 추가할 수 있다.

    setArray([...array, array.slice(1,2)]);
    // 또 다른 배열을 추가해 해당 배열을 수정해서 추가할 수 있다
  }

  return (
    <div>
      {/* 
        기존 배열의 요소를 새로운 배열로 복사하거나 추가적인 요소를 병합 시
        / 값을 업데이트 할때 사용할 수 있다
      */}

      <button type="button" onClick={Box}>aa</button>
      
    </div>
  );
}


export default Spread;
