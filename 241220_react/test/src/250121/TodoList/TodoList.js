import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const TodoList = () => {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = (id) => {
    dispatch({type: "TOGGLE_TODO", payload: {id}})
  }

  const remove = (id) => {
    dispatch({type:"REMOVE", payload:id})
  }


  return ( 
    <div>
      <h2>List</h2>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
              
              <button type="button" onClick={() => remove(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
   );
}
 
export default TodoList;