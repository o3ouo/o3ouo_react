import React, {useEffect} from 'react';
import './css/Event.css';

function Event() {

  const resize = () => console.log('화면 리사이즈');
  const scroll = () => console.log('화면 스크롤');

  useEffect(() => {
    window.addEventListener("resize", resize) 
    window.addEventListener("scroll", scroll)
    // 함수를 만들어서 함수명만 입력
    return() => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scroll);
    } // 이벤트를 제거하지 않으면 메모리 누수가 발생. 이벤트가 끝났을 때 이벤트 종료지점에서 remove 해주어야 함.
  }, [])

  return (
    <div>

    </div>
  );
}

export default Event;