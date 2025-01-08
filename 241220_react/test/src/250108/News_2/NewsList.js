import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function NewsList({category}) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const Data = async () => {
      try {
        const query = category === 'All' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsdata.io/api/1/latest?country=kr${query}&apikey=pub_64517ea65789adb43dfbc3d97dfab94e83340`);
        setArticles(response.data.results || []); // 동위연산자 에러 방지
      } catch (error) {
        setArticles([]); // error 발생시 빈 배열로 설정
        console.log('error다 이녀석아');
      }
    }
    Data();
  }, [category]);

  console.log(articles);

  return (
    <div>
      {
        // props로 전달
        articles.map((article) => (
          <NewsItem key={article.article_id} article={article}/>
        ))
      }
    </div>
  )
}

export default NewsList;