import React from 'react';
import { useParams } from 'react-router-dom';


function ProDet() {

  const {top} = useParams();

  return (
    <div>
      <h1>제품 상세페이지 {top}</h1>
    </div>
  );
}

export default ProDet;