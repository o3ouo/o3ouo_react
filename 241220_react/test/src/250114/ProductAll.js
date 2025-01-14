import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProdCard from './ProdCard';
import { useNavigate, useSearchParams } from 'react-router-dom'; // 쿼리로 값을 이동 시킬 때, 쿼리의 값을 가져올 때


// 서버 : 풀텍스트 설치라는 기능이 있으면 키워드를 넣으면 서버 안에서 검색 가능
// json server(라이브러리) : json 파일을 기반으로 간단하고 빠르게 Restful api 서버를 구축할 수 있는 도구 / 백엔드 작업 없이도 데이터 요청 및 테스트 

// 로컬로 가지고 올 때에는 이름을 변경해도 상관 없지만 서버에서 가지고 올 때는 무조건 db.json의 형태를 사용해야 한다
// 가짜 서버를 제작할 때에 db.json의 위치는 src, package.json 파일과 같은 위치에 생성
// npm install -g json-server > 설치
// json-server --watch db.json --port 5000 > 리액트의 5000번 대의 서버에 위치 (만약 안되면 앞에 npx 붙이기)

function ProductAll() {

  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [query] = useSearchParams();
  console.log('query', query);

  // const data = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/products`); // 서버에 연결시켜 둔 객체 파일을 가져옴
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.error('error 다잉');
  //   }
  // }

  const data = async () => {
    const searchQuery = query.get('q') || ""; // 

    try {
      const response = await axios.get(`http://localhost:5000/products?q=${searchQuery}`);
    
      // 데이터를 필터링
      const fillterData = response.data.filter(item => item.title.includes(searchQuery) // title 필드에 검색어 포함 여부 확인
    )
    setProduct(fillterData)

    } catch(error) {
      console.error("error 다잉");
    }
    console.log(searchQuery);
  }

  useEffect(() => {
    data();
  }, [query]); // 배열 안에 쿼리를 넣어서 주시 상태로 만들어줘야 함

  // console.log(product);

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      <h1>All Item</h1>
      <input type="text" onKeyPress={(event) => search(event)}/>
      <div className="contents">
        {
          product.map(item => (
            <ProdCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default ProductAll;