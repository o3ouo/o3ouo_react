import React, { useEffect, useState } from 'react';
import { productActions } from './redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch();
  const list = useSelector(state => state.list)
  const navigate = useNavigate();
  const [query] = useSearchParams();

  const data = () => {
    const searchQuery = query.get("q") || "";
    dispatch(productActions.data(searchQuery)) // 매개변수 활용하여 productActions에 전달
  }

  useEffect(() => {
    data();
  }, [query])

  const search = (e) => {
    if(e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`)
      console.log('a')
    }
  }

  return ( 
    <div>
      <input type="text" onKeyPress={(e) => search(e)}/>
      <button type="button">Search</button>
      <ul>
        {
          list.map(item=>(
            <div key ={item.id}>
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <p>가격 : {item.price}</p>
            </div>
          ))
        }
      </ul>
    </div>
  );
}
 
export default App;