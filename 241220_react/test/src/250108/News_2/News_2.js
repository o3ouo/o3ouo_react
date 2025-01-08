import React, {useState, useEffect, useCallback} from 'react';
import Category from './Category';
import NewsList from './NewsList'

function News_2() {

  const [category, setCategory] = useState('All');

  // 카테고리가 변경될 때 실행되는 함수
  //  useCallback : 성능 최적화를 위해 사용되는 훅 / 함수의 재생성을 방지하여 불필요한 렌더링을 줄이는데 사용 

  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div>
      <Category category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </div>
  );
}

export default News_2;