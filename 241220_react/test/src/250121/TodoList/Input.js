import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


const Input = () => {

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addTodo = () => {
    if(text.trim() !== "") {
      dispatch({type:"ADD_TODO", payload: {text}})
      setText('');
    }
  }
  console.log(text)

  return ( 
    <div>
      <form action="#">
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}
 
export default Input;
