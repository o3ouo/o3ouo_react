import React from 'react';
import Item from './Item';


function TodoCom({ todos, toggleTodo, deletTodo }) {

  console.log(todos)

  return (
    <div>
      <ul>
        {
          todos.map((todo) => (
            <Item 
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deletTodo={deletTodo}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoCom;