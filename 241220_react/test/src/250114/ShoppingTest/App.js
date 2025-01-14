import React from 'react';
import {Route, Routes, Link, Navigate} from 'react-router-dom'
import './css/App.css';
import AllItem from './AllItem';
import Login from './Login';


// 1. 전체 상품 페이지, 로그인, 상품 상세페이지
// 2. 네비바 - 3단 / 상-로그인, 중-로고, 하-메뉴, 검색
// 3. 기본 전체 상품페이지
// 4. 로그인 클릭 시 로그인 페이지
// 5. 상품 클릭 시 상품 디테일 페이지 / 로그인이 되어있지 않을 결우 로그인 페이지가 나오게 / 로그인이 되었을 때 상품 디테일 페이지가 볼 수 있게(로그인 버튼을 눌렀을 때 로그인(true)으로 변경 되게)
// 6. 검색 기능 / 해당 키워드를 검색했을 때 해당 요소만 보이게

function App() {
  return (
    <div>

      <nav className="nav">
        <ul>
          <li>
            <Link to={"/"}>LOGO</Link>
          </li>
          <li><Link to={"/Login"}>Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<AllItem />}/>        
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;