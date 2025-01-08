import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './Post';
import './css/N.css';

function News() {

  // post State
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState('');

  const menuBtn = [
    {category: 'All', link: ''},
    {category: 'Top', link: 'category=top'},
    {category: 'Sports', link: 'category=sports'},
    {category: 'Rechnology', link: 'category=rechnology'},
    {category: 'Business', link: 'category=business'},
    {category: 'Science', link: 'category=science'},
    {category: 'Entertainment', link: 'category=Entertainment'},
    {category: 'Health', link: 'category=Health'},
    {category: 'World', link: 'category=World'},
    {category: 'Politics', link: 'category=Politics'},
    {category: 'Environment', link: 'category=Environment'},
  ];

  // API 데이터 가져오기
  const fetchData = async (filter) => {
    try {
      const response = await axios.get(`https://newsdata.io/api/1/latest?country=kr&${filter}&apikey=pub_64517ea65789adb43dfbc3d97dfab94e83340`);
      setPost(response.data.results || []); // 데이터 저장
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // 초기 데이터
  useEffect(() => {
    fetchData(filter);
  }, [filter]); // 필터가 변경될 때마다 호출

  // 버튼 클릭시 필터 변경
  const menuClick = (link) => {
    setFilter(link);
  };

  // 버튼 렌더링
  const category = menuBtn.map((btn, idx) => (
    <button key={idx} onClick={() => menuClick(btn.link)} className={btn.category}>{btn.category}</button>
  ));


  return (
    <div>
      {/* header */}
      <header className="header">
        <div className="container">
          <ul className="like-link">
            <li>List of favorite anime</li>
            <li><a href="#">Jujutsu Kaisen</a></li>
            <li><a href="#">Demon Slayer</a></li>
            <li><a href="#">Sin: The 7 Deadly Sins</a></li>
            <li><a href="#">Natsume Yujin-chō</a></li>
          </ul>
          <h1 className="title-logo">
            <a href="#">LIVE <br /> NEWS</a>
            </h1>
          <div className="weather">
            <figure className="img-box">
              <img src="/250107_News/sun.png" alt="weather image" />
            </figure>
            <p className="text">대체로 맑음</p>
            <p className="text">최고: 4℃ 최저: -4℃</p>
          </div>
        </div>
      </header>

      <main className="main">
        {/* contents */}
        <div className="container">
          {/* aside */}
          <aside className="aside">
            <nav className="nav">
              <div className="btn-inner">
                {category}
              </div>
            </nav>
          </aside>
          <div className="contents">
            <Post posts={post} menu={menuBtn}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default News;