import React from 'react';
import { useDispatch  } from 'react-redux';

const ProductList = () => {

  const dispatch = useDispatch();

  const products = [
    {id: 1, name: "상품 A", price: "41,200"},
    {id: 2, name: "상품 B", price: "22,120"},
    {id: 3, name: "상품 C", price: "30,700"},
  ]

  // action으로 reducer로 던지기
  // payload로 매개변수로 받은 product 추가 전달
  const addToCart = (product) => {
    dispatch({type:"ADD_TO_CART", payload: product});
  }

  return (
    <div className="product" style={{flexBasis: "60%"}}>
      <h2>상품</h2>
      <div className="list">
        {
          products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>price: {product.price}￦</p>
              <button type="button" onClick={() => addToCart(product)}>Cart</button>
              {/* onClick 내부에 함수 addToCart의 매개변수로 product 전달(하나 하나의 객체로 전달됨)  */}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList;