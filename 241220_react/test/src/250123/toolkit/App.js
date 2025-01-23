import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { plus } from './redux/reducer/counterSlice';
import { minus } from './redux/reducer/counterSlice';
import { multiply } from './redux/reducer/counterSlice';

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count) // counter: store에 대한 경로 (reducer 안에 키)

  const clickPlus = () => {
    // dispatch({type:"PLUS", payload: 5})
    dispatch(plus(5));
  }

  const clickMinus = () => {
    dispatch(minus(5));
  }

  const clickMultiply = () => {
    dispatch(multiply(2));
  }

  return ( 
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={clickPlus}>Plus</button>
      <button type="button" onClick={clickMinus}>Minus</button>
      <button type="button" onClick={clickMultiply}>Multiply</button>
    </div>
  );
}
 
export default App;