import React, {useState, useEffect, useRef} from 'react';

function From({list, setList}) {

  // input box 
  const [inputText, setInputText] = useState('');

  // input id 생성
  const [inputId, setInputId] = useState(1);

  // focus
  const focusRef = useRef();
  
  // input 창의 텍스트가 바뀔 때마다 콘솔창에 입력 됨
  const onChange = (e) => {
    setInputText(e.target.value)
  }
  
  // new list add
  const addTask = () => {
    // 입력 값이 빈 문자열일 경우 추가하지 않음
    if (inputText.trim() === '') {
      return;
    }
    const newTask = {
      id: inputId,
      text: inputText,
      checked: false, // check의 초기 상태
    };
    setList([...list, newTask]); // 새 항목 추가
    setInputId(inputId + 1); // id 값 증가
    setInputText(''); // 입력 필드 초기화
    focusRef.current.focus(); // 입력 필드 포커스
  };

  // keydown event
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask(); 
    }
  }
  
  return (
    <section className="from">
      <input 
      type="text" 
      className="input-box" 
      value={inputText} 
      onChange={onChange} 
      onKeyDown={onKeyDown}  
      placeholder='해야 할 일 입력해라 ~~'
      ref={focusRef}
      />
      <button 
      type="button" 
      className="btn"
      onClick={addTask}
      >Enter</button>
    </section>
  );
}

export default From;