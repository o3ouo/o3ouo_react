import React from 'react';
import { animated, useSpring, useSpringRef } from '@react-spring/web';

function App() {
  // const spring = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   config: { duration: 2000 },
  // });
  
  // 이벤트로 주고 싶다면 함수로 만듬 () => {}
  // const [spring, api] = useSpring(() => ({
  //   from: { opacity: 1 },
  //   config: {duration: 2000 }
  // }))

  // const click = () => {
  //   api.start({
  //     from: {
  //       opacity: 0,
  //     },
  //     to: {
  //       opacity: 1
  //     }
  //   })
  // }

  const springRef = useSpringRef();
  const [spring, api] = useSpring(() => ({
    ref: springRef, // 연결
    from: { opacity: 0 },
    to: { opacity: 1 }
  }))

  const click = () => {
    springRef.start();
  }

  return (
    <div>
      <button type="button" onClick={click}>Click</button>
      <animated.div style={{textAlign: "center", marginTop: "3rem", ...spring}} >하이하시렵니까</animated.div>
    </div>
  );
}

export default App;
