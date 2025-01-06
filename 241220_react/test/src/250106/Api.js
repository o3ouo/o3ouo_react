import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Api() {

  const [post, setPost] = useState([]);

  // // 랜더될 때 한 번만 실행하기 위해 effect 사용
  // useEffect(() => {
    
  // const Data = async () => {
  //   // 자바스크립트에서 일반적으로 api를 가지고 오는 방법
  //   // 객체 파일 덩어리를 api로 링크를 가지고 오는 것
  //   // const response = fetch('api주소')
  //   // const response = fetch('https://jsonplaceholder.typicode.com/posts');
  //   // console.log(response);

  //   try {
  //     // 이거 받아오면서 기다려
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 

  //     // JSON 파일로 파싱해서 가지고 와라 (객체로 정리해서 가져옴)
  //     const dats = await response.json();

  //     setPost(dats);
  //   } catch (error) {
  //     console.log('error');
  //   }
  // }
  // Data();
  // }, []);

  // console.log(post);

  // axios 라이브러리 사용 / fetch 생략 가능, 대신 axios.get
  // 큰 덩어리에서 data를 가져옴
  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/sources?country=kr&apikey=pub_64517ea65789adb43dfbc3d97dfab94e83340');
        setPost(response.data.results);
        console.log(response.data.results)
      } catch (error) {
        console.log('error');
      }
    }

    Data();
  }, []);

  return (
    <div>
      {/* 
      랜더 - state - effect 순서

      객체 덩어리 받아오기
      객체 덩어리를 스테이트 안에 넣기
      객체 덩어리를 정리해서 뽑아서 사용

      랜더 : UI에 출력을 위해 만드는 단계

      Api : 서버와 클라이언트 간 데이터를 주고 받는 인터페이스

      react에서 Api를 호출 할 때는 async/await를 사용해야 함
      / 비동기적으로 만들지 않으면 위에서 먼저 호출되기 때문

      try ... catch 구문 : 에러를 처리하기 위해 사용되는 구문 / 코드 실행중 발생할 수 있는 오류를 예상할 수 있음 / 예상치 못한 오류에도 프로그램이 중단되지 않도록 함 / 무조건 써야하는 건 아니지만 react에서 많이 사용 
      try {
      // 에러가 발생할 가능성이 있는 코드
      } catch (error) {
        에러가 발생했을 때 실행되는 코드
      }

      Axios (라이브러리)
      : json 변환을 자동으로 처리하므로 코드가 간결 / 요청 및 응답 인터셉터, 기본 url 설정 등 추가 기능 
 
      ctrl + c : 작업 중단
      npm install axios : axios 설치
      package.json 파일 들어가면 axios 설치된 것 알 수 있음

      api 키 발급 - api 주소

      api의 경로 확인

      */}

      <h1>게시글 목록</h1>
      <ul>
        {
          post.map((posts, idx) => (
            <li key={idx}>
              <h2>
                {posts.name}
              </h2>
              <a href={posts.url} target='_blank'></a>
              <img src={posts.icon} />
              <p>
                {posts.descripttion}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Api;