import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {

  const [products, setProducts] = useState([]);

  // 내가 가지고 있는 파일을 가지고 올 때는 try catch가 아니라 then을 사용
  useEffect(() => {
    axios.get('/db.json')
    .then((response) => setProducts(response.data.products))
    .catch((error) => console.error('er'));
  }, []);

  console.log(products)

  return (
    <div>
      <h1>상품 목록</h1>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
              <img src={product.img} alt={product.title}/>
              <h2>{product.title}</h2>
              <p>price{product.price}원</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
} 

export default ProductList;