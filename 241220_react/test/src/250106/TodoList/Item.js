import React from 'react'

function Item({ todo, toggleTodo, deletTodo }) {
  return (

    <li>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}></span>
      <p>{todo.content}</p>
      <button type="button" onClick={() => deletTodo(todo.id)}>Del</button>
    </li>

  );
}

export default Item;