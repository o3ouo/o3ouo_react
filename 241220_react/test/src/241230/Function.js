import React, {useState, useEffect} from 'react';

// useEffect 
// : 함수형 컴포넌트에서 라이플사이클을 주기위한 함수
// : import로 불러와야 사용할 수 있음
// useEffect(() => {콜백함수}, [배열])
// 배열 공간이 업데이트가 됐는지 확인해주는 공간

/*
componentDidMount >> useEffect(() => {}, [])
conponentDidUpdate() >> useEffect(() => {}, [state]);
componentWillUnmount() >> useEffect(() => { return () => { 종료 };}, [])
*/

function Function() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(2);

  const time = () => {
    setCount(count + 1);
    console.log(count)
  }

  // ui를 다 그리고 난뒤에 나타남 (랜더 후에 나오는 영역)
  // api 호출을 useEffect에서 많이 사용
  useEffect(() => {
    console.log("useEffect-1", "= componentDidMount")
  }, []);

  useEffect(() => {
    console.log("useEffect-2", count, value)
  }, [count, value]);
  // 위에서 count만 setCount로 업데이트를 시켰기 때문에 value의 값은 Effect 값이 출력되지 않는다.
  
  // 분리해서 사용하고 싶을 때는 useEffect를 계속 만들어서 사용할 수 있다
  useEffect(() => {
    console.log("useEffect-3", count)
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("종료")
    }
  }, []);
  

  return (
    <div>
      {console.log("render")}
      {/* 버튼 클릭시 1씩 증가되는 */}
      <h2>Click : {count}</h2>
      <button type="button" onClick={time}>Click</button>
    </div>
  );
}

export default Function;