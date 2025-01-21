import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './Box';

// useDispatch : 함수형 컴포넌트 내에서 redux 스토어에 액션을 하여 상태 변경 시 사용
// useSelector : 함수형 컴포넌트에서 store 상태를 읽을 수 있도록 해줌
// redux store의 상태를 구독하고, 상태가 변경될 때 필요한 데이터를 자동으로 가져오면 컴포넌트를 리렌더링 함
// 함수를 불러 매개변수의 값을 리턴해서 가지고 온다

export default function App () {

  const dispatch = useDispatch();
  // 액션에서의 상태 변경 시 dispatch를 reducer로 던짐

  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const pw = useSelector(state => state.pw);

  const plus = () => {
    dispatch( {type: "PLUS", payload:{num: 5}} );
    // type : 동작 이름 / payload : 추가적으로 주고싶은 값, 매개변수와 같음(선택 사항)
  }

  const minus = () => {
    dispatch({type: "MINUS"});
  }

  const login = () => {
    dispatch({type: "LOGIN", payload:{id: "o3ouo", pw: '1004'}})
  }
  
  return (
    <div>
    <h1>{count}</h1>    
    <button type="button" onClick={plus}>Plus</button>
    <button type="button" onClick={minus}>Minus</button>
    <Box />
    <h2>{id}, {pw}</h2>
    <button type="button" onClick={login}>Login</button>
    </div>
  );
}