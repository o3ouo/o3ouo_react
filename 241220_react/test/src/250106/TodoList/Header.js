import React, {useState} from 'react';

function Header({ addTodo }) {
  
  const [inputValue, setInputValue] = useState(''); // 글자 박스 안에 담음
  // console.log(inputValue); // input 창에 text 입력시 console에 출력  

  const add = () => {
    // trim : 공백이 있을 경우 공백 제거
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(''); // input 창 초기화
    }
  }

  return (
    <header>
      <input 
        type='text' 
        placeholder='할 일을 입력하세요.'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // change 될 때마다 해당 요소의 value를 업데이트
      />
      <button type="button" onClick={add}>Add</button>
    </header>
  );
}

export default Header;