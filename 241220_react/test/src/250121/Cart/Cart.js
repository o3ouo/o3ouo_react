import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)

  const plusC = (id) => {
    dispatch({type:"PLUS_COUNT", payload:{id}})
  }
  
  const minusC = (id) => {
    dispatch({type:"MINUS_COUNT", payload:{id}})
  }
  const remove = (id) => {
    dispatch({type:"REMOVE", payload:{id}})
  }


  return (
    <div className="cart" style={{flexBasis: "40%"}}>
      <h2>상품</h2>
      <div>
        {cart.map(item => (
          <div key={item?.id}>
            <h3>{item?.name}</h3>
            <p>price: {item.price}￦</p>
            <p>수량 : {item.count}</p>
            <button type="button" onClick={() => plusC(item.id)}>+</button>
            <button type="button" onClick={() => minusC(item.id)}>-</button>
            <button type="button" onClick={() => remove(item.id)}>Del</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;