import React, { useEffect } from 'react';
import { useGetMovies } from './hooks/useMovies';
import './css/App.css'
import { useInView } from 'react-intersection-observer';

function App() {

  // 자동으로 다음 페이지의
  // 다음 페이지에 에러가 있을 때 알려달라

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchNextPageError } = useGetMovies();
  console.log(data?.pages);

  // fetchNextPage : useInfiniteQuery에서 제공하는 훅, 다음 페이지 데이터를 요청할 때 사용하는 함수
  // hasNextPage : useInfiniteQuery에서 반환되는 값 다음 페이지가 있는 지 나타내는 불리언 값 
  // isFetchingNextPage : 다음 페이지 데이터를 가져오는 중인지 여부를 나타내는 불리언 값 > true: 현재 데이터 로딩 중  false: 데이터 로딩이 완료되어 요청이 없는 상태

  const { ref, inView } = useInView();

  console.log(inView);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchNextPageError) {
      fetchNextPage();
    }
  }, [inView]);


  return (
    <div className="wrap">
      {/* 
        useInfiniteQuery : 무한 스크롤이나 페이지네이션 데이터 로딩을 구현할 때 유용

        TMDB : 영화, TV 프로그램, 넷플 등의 데이터 API를 무료로 제공

        useInView : 특정 요소가 화면(viewport) 보이는지 여부를 감지하기 위해
      */}

      <nav>
        <button type="button">Search</button>
        <button type="button">Filter</button>
        <button type="button">FAQ</button>

      </nav>

      <div className="container">
       <header>
        <h1>Top Movies </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur obcaecati maxime, consectetur iure, accusantium,
        </p>
      </header>
      <div className="contents">
        <div className="box-wrap">
          {data?.pages.map((page) => (
            page.results.map((movie, idx) => (
              <div key={idx} className="box">
                <figure className="img-box">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </figure>
                <h3>{movie.title}</h3>
              </div>
            ))
          ))}
        </div>
      </div>

      <span>Movies</span>


      <h2 ref={ref} style={{textAlign: "center"}}>Loding...</h2>
      {/* ref: dom 요소 감시대상 */}

      </div>


    </div>
  );
}

export default App;
