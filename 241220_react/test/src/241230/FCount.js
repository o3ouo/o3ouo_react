import React, {useState, useEffect} from 'react';

function FCount() {
  const [time, setTime] = useState(0);
  const [boll, setBoll] = useState(false);
  let intervalId = null;

  // const timer = () => {
  //   if (!boll) {
  //     intervalId = setInterval(() => {
  //       setTime(prevTime => prevTime + 1);
  //       // setTime((현재의 최신 상태 값 / 이름은 개발자 임의로 지정 가능) => {return newState; (업데이트 할 상태 반환)})
  //     }, 1000);
  //     setBoll(true);
  //   }
  // };

  useEffect(() => {
    if (boll) {
      intervalId = setInterval(() => {
        setTime((update) => update + 1);
      }, 1000);
      console.log(time, boll);
    } else {
      clearInterval(intervalId);
      console.log(time, boll);
    }

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(intervalId);
  }, [time, boll]); // boll이 변경될 때마다 실행

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>Time : {time} seconds</h2>
      <button type="button" onClick={() => setBoll(true)}>Start</button>
      <button type="button" onClick={() => setBoll(false)}>Stop</button>
      <button type="button" onClick={() => {
        setBoll(false);
        setTime(0);
      }}>Reset</button>
    </div>
  );
}

export default FCount;