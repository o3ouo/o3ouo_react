import React, {useState} from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom';
import Home from './Home'
import About from './About';
import Prod from './Prod';
import ProDet from './ProDet';
import Login from './Login';
import User from './User';

function App() {

  const navigate = useNavigate();

  const move = () => {
    navigate('/Prod?q=jeans&page=3');
  }

  const [login, setLogin] = useState(false);

  // 첫 글자 대문자 사용 > 컴포넌트 만듬
  const PrivateRoute = () => {
    return login == true ? <User /> : <Navigate to='/Login' /> }

  return (
    <div>
      {/* 
      url 디자인
      Restful Route : 웹 애플리케이션에서 resource에 대한 경로(url)와 그것을 처리하는 http 메서드를 결합하여 설계된 라우팅 방식

      RESTful verb 종류
      get : 정보를 가져올때 사용
      post : 새로운 데이터를 만들어 낼 때 사용
      put : 기존 데이터를 수정 시 / 전체 수정
      patch : 기존 데이터를 수정 시 / 부분 수정
      delete : 기존 데이터를 삭제 시

      /경로/ : id >> 해당 경로 아이템의 파라미터 값을 보여줌

      useParams 훅

      React Router 에서 제공하는 훅으로 url 경로에 포함된 동적 파라미터 값을 추출할 수 있도록 도와줌. 이 훅은 동적 라우팅을 구현할 때 유용 url 경로의 일부로 전달된 데이터를 컴포넌트에서 사용할 수 있음.

      ? 뒤에 있는 값들을 전부 쿼리라고 함 / 쿼리도 url에서 가져와서 사용할 수 있음
      도메인에 아무런 영향을 미치지 않음

      useSearchParams
      : 현재 url의 쿼리 문자열을 읽고 조작할 수 있도록 도와주는 훅
      쿼리 문자열은 url의 ? 뒤에 위치하며, 주로 키-값 쌍으로 데이터를 전달하는 데 사용

      Navigte 컴포넌트 사용 = 래ㅔ-----------------------------------------

      */}
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/Prod"}>Prod</Link></li>
        <li><Link to={"/Login"}>Login</Link></li>
        <li><Link to={"/User"}>User</Link></li>
      </ul>

      <button type="button" onClick={move}>이동</button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Prod' element={<Prod />} />
        <Route path='/Prod/:top' element={<ProDet />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/User' element={<PrivateRoute />} />
      </Routes>
    </div>

    
  );
}

export default App;