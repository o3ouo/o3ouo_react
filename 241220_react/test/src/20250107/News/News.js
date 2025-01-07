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
      <header className="header">
        <div className="container">
          <h1 className="title-logo"><a href="#">Live Example</a></h1>
          <div className="btn-inner">
            {category}
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Post posts={post} menu={menuBtn}/>
        </div>
      </main>
    </div>
  );
}

export default News;