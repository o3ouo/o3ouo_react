import './css/Aside.css'

function Aside() {
  return (
    <aside className="aside">
      
      <h1 className="logo">
        <a href="#">NAVER VIBE</a>
      </h1>

      <Btn btn="멤버십 구독"/>

      <nav className="nav">
        <ul className="first-gnb gnb">
          <li><a href="#">투데이</a></li>
          <li><a href="#">차트</a></li>
          <li><a href="#">최신앨범</a></li>
          <li><a href="#">DJ 스테이션</a></li>
          <li><a href="#">VIBE MAG</a></li>
          <li><a href="#">이달의 노래</a></li>
        </ul>
        <ul className="last-gnb gnb">
          <li><a href="#">서비스 소개</a></li>
          <li><a href="#">내돈내듣</a></li>
          <li><a href="#">VIBE 오디오</a></li>
          <li><a href="#">REWIND 2024</a></li>
          <li><a href="#">이용권 선물</a></li>
        </ul>
      </nav>

      <Btn btn="데스크톱앱 설치"/>

    </aside>
  );
}

const Btn = (props) => {
  return (
    <div className="btn">
      <a href="#">{props.btn}</a>
    </div>
  );
}

export default Aside