import "./css/Header.css"

function Header() {
  return (
   <header>
    <Banner />
    <Nav />
   </header>
  );
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">상표</a></li>
        <li><a href="#">남자들</a></li>
        <li><a href="#">여성</a></li>
        <li><a href="#">어린이</a></li>
        <li><a href="#">라이플스타일</a></li>
        <li><a href="#">갤러리</a></li>
        <li><a href="#">소식</a></li>
      </ul>

      <h1>
        <a href="#">
          <img src="/241223_props_ex/logo.jpg" alt="logo" />
        </a>
      </h1>
    </nav>
  );
}

const Banner = () => {
  return (
    <div className="banner">
      <a href="#">
        <p>매장 공지사항이나 메세지 공유하기</p>
      </a>
    </div>
  );
}


export default Header;


