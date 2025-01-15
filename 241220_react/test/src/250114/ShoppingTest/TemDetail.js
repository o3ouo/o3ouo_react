import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function TemDetail() {

  const {id} = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      const foundProduct = response.data.find((p) => p.id === id);
      // parseInt() : 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
      setProduct(foundProduct);
      setLoading(false);
    } catch (error) {
      console.error('erro 다잉');
      setLoading(false);
    }
  }; 

  useEffect(() => {
    data();
  }, [id])

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <img src={product?.img} alt={product?.title} />
      <h1>{product?.title}</h1>
      <p>{product?.price}</p>
      <h3>size</h3>
      <ul>
        {
          product?.size?.map((size) => (
            <li key={size}>{size}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default TemDetail;