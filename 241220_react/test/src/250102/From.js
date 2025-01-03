import React, { useState } from 'react';

function From({ addTask }) {

  // input box 
  const [inputText, setInputText] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(inputText);
      setInputText('');
    }
  };
  
  return (
    <section className="from">
      <input 
      type="text" 
      className="input-box" 
      value={inputText} 
      onChange={(e) => setInputText(e.target.value)} 
      onKeyDown={handleKeyDown}  
      placeholder='해야 할 일 입력해라 ~~'
      />
      <button 
      type="button" 
      className="btn"
      onClick={() => {
        addTask(inputText);
        setInputText('');
      }}>
      Enter</button>
    </section>
  );
}

export default From;