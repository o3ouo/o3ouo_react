import React, { useState } from 'react';
import Input from './Input';
import TodoList from './TodoList';

const  Todo = () => {


  return ( 
    <div>
      <h1>TO_DO_LIST</h1>
      <Input />
      <TodoList />
    </div>
   );
}
 
export default Todo;