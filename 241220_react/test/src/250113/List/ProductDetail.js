import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {

  const {id} = useParams(); // url에서 id 파라미터 값 가져오기
  console.log(id)
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/db.json')
    .then((response) => {
      const foundProduct = response.data.products.find((p) => p.id === parseInt(id)); // find : 조건에 맞을 때 반환함
      setProduct(foundProduct);
    })
    .catch((error) => console.log("error다 ~"))
  }, [id]);

  console.log(product);

  return (
    <div>
      <img src={product.img} alt={product.title} />
      <h1>{product?.title}</h1>
      <p>Price: {product.price}</p>
      <h3>Size</h3>
      <ul>
        {
          product.size.map((size) => (
            <li key={size}>{size}</li>
          ))
        }
      </ul>
    </div>
  );
} 

export default ProductDetail;