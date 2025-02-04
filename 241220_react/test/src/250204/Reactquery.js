import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Home from './Home';
import RQeury from './RQeury';
import Nomal from './Nomal';

function Reactquery() {
  return (
    <div>
      {/* API: 서버 상태의 데이터 */}
      {/* react는 꾸준하게 상태관리를 해줘야함. 그러기 위해 편하게 사용할 수 있는 라이브러리들을 많이 사용 */}
      <h2>리액트 쿼리</h2>
      <p>: 서버 상태를 효율적으로 관리하기 위한 라이브러리</p>
      <p>: 비동기 또는 서버 상태 작업에 그다지 좋지 않다 / 서버 상태가 완전히 다르기 때문</p>
      <p>: 코드가 간결해 진다.</p>
      <p>: ⭐캐시를 관리해준다!! / 기존에는 캐싱을 하지 못함</p>
      <p>: 변수 같은 것들을 전역으로 관리할 수 없다.</p>

      {/* 
      리액트 상태 3가지 
      1. 지역 - 컴포넌트 안에서 사용하는 상태 
      2. 전역 - 전체에서 쓰이는 상태 > (테마, 컬러 등 자식한테 보내주는 것들...) 전역 상태를 관리하기 위해 부모컴포넌트, 리덕스(store), 를 사용함 
      3. 서버 상태 - api 통신할 때 필요한 상태 (로딩, 전송 성공, 전송 실패)
      */}

      <Link to="/" >Home</Link>
      <Link to="/query" style={{margin: "20px"}}>React Query</Link>
      <Link to="/nomal" style={{margin: "20px"}}>Nomal</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/query' element={<RQeury />} />
        <Route path='/nomal' element={<Nomal />} />
      </Routes>
    </div>
  );
}

export default Reactquery;
