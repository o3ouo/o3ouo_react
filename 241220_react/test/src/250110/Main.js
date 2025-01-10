import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate(); // 훅 호출

  const move = () => {
    navigate('/About'); // navigate('경로')
  }

  return (
    <div>

    {/* 
    useNavigate : 프로그래밍 방식으로 페이지를 이동할 때 사용
    */}

      <h1>Main Page</h1>
      <button type='button' onClick={move}>About Page 이동</button>
    </div>
  );
}

export default Main;