import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Prod() {

  let [query, setQuery] = useSearchParams();
  console.log("usp", query.get('page')); // 두 개의 값을 한 번에 넣지 못함, 분할해서 사용해야 함

  return (
    <div>
      <h2>전체 상품 페이지</h2>
    </div>
  );
}

export default Prod;