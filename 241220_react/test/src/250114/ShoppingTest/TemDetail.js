import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function TemDetail() {

  const {id} = useParams();

  const [product, setProduct] = useState(null);

  const data = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
    
      const foundProduct = response.data.products.find((p) => p.id === parseInt(id));
      // parseInt() : 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
      setProduct(foundProduct);
    } catch (error) {
      console.error('erro 다잉');
    }
  } 

  useEffect(() => {
    data();
  }, [id])

  return (
    <div>
      <img src={product?.img} alt={product?.title} />
      <h1>{product?.title}</h1>
      <p>{product?.price}</p>
      <h3>size</h3>
      <ul>
        {
          product?.size.map((size) => (
            <li key={size}>{size}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default TemDetail;