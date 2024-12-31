import React, {useState, useEffect} from 'react';

function Time() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  console.log(count, running)
  
  useEffect(() => {
    console.log(running)
    
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((time) => time + 1);
      }, 1000)
    } 
    // 종료지점
    return () => clearInterval(interval);
  }, [running]);
  // 배열 안에 업데이트 내용

  const reset = () => {
    setCount(0);
    setRunning(false);
    // 위에서 조건문으로 true와 false의 값으로 설정을 해놨기 때문에 초기화의 실행 내용은 count의 값과 running의 값만 설정해주면 된다.
  }

  return (
    <div>
      <h1>타이머 : {count} 초</h1>
      <button type="button" onClick={() => setRunning(true)}>Start</button>
      {/* onClick 했을 때 setRunning을 함수로 호출해서 true로 만듬 */}
      <button type="button" onClick={() => setRunning(false)}>Stop</button>
      <button type="button" onClick={reset}>Reset</button>
    </div>
  )
}

export default Time;