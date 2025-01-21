import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import Cart from './Cart';

function Test () {
  return (
    <div>
      <h1>Redux 쇼핑 카트 App</h1>

      <div className="contents">
        <ItemList />
        <Cart />
      </div>


    </div>
  );
}

export default Test;
