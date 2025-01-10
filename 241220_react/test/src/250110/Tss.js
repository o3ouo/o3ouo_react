import { Route,Routes } from 'react-router-dom';
import Prod from './Prod';
import Main from './Main';
import Nav from './Nav';
import About from './About';


function Tss() {
  return(
    <div>

      {/* 
      라우터(Router) : React에서 페이지 간 이동(라우팅)을 처리하기 위해 사용되는 라이브러리
      React는 기본적으로 SPA 작동 방식으로 동작하므로 url이 변경되더라도 전체 페이지를 새로 고침하지 않고 필요한 부분만 업데이트 한다. 이를 통해 빠르고 부드러운 사용자 경험 제공
      url 경로에 따라 특정 컴포넌트 렌더링하여 여러 페이지처럼 보이도록 구현

      브라우저의 새로고침 없이 url의 변경과 컴포넌트를 렌더링 / react에서 sub page를 연결하는 방식

      1. 라우터 라이브러리 설치 (라이브러리는 해당 작업 폴더가 아닌 전체 프로젝트의 통합 터미널에 라이브러리를 설치해야 함)
      npm install react-router-dom

      2. 기본설정 : BrowserRouter 앱 감싸기
      렌더링 되는 컴포넌트 url을 관리할 수 있도록 도와주는 컴포넌트

      3. 라우팅 구현
      Routes Route 설정
      url 경로에 따라 다른 컴포넌트를 렌더링
      <Routes> : 여러 <Route>를 감싸는 컨테이너
      <Route> : 특정 경로 (path)에 매칭될 때 렌더링할 컴포넌트를 지정
      <Route path="경로" element={<렌더링 할 컴포넌트 />}>
      기본페이지 구현 path="/"

      4. 네비게이션 추가
      페이지 간 이동 리액트 라우터 <Link></LInk> 컴포넌트를 사용
      전체 페이지 새로고침 없이 경로를 변경

      <Link to="이동 할 경로"></Link>
      */}

      <h1>리액트 라우터</h1>

      <Nav/>

      <Routes>
        <Route path='/' element={<Main/>}/>  {/* 연결할 메인 페이지 */}
        <Route path='/About' element={<About />} />
        <Route path='/Prod' element={<Prod/>}/>
        
      </Routes>
    </div>
  )
}

export default Tss;