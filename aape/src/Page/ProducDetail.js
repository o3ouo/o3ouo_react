import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProducDetail = () => {

  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const data = async () => {
    try {
      const response = await axios.get(`http://my-json-server.typicode.com/o3ouo/aape/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("에러");
    }
  }

  useEffect(() => {
    data();
  }, [id]);

  console.log(product);

  return (
    <div className='productdetail'>
      <img src={product?.img} alt={product?.title} />
      <div className='inner'>
        <h3>{product?.title}</h3>
        <h4>{product?.price} 원</h4>
        <p>{product?.new ? "신제품" : ""}</p>
        <p>사이즈</p>
        <ul>
          {product?.size.map((size, idx) => (
            <li key={idx}>{size}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProducDetail;
