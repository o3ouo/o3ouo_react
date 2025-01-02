import React, {useState, useEffect} from 'react';
import './css/TodoList.css';
import From from './From';
import List from './List';
import Menu from './Menu';
import SubMenu from './SubMenu';

function TodoList() {
  
  // list
  const [list,setList] = useState([]);

  return (
    <div className="wrap">
      <div className="container">
        <div className="top">
          <div className="left">
            <h1 className="title">To Do List</h1>
            <Menu list={list} setList={setList}/>
            <List list={list} setList={setList}/>
          </div>
          <div className="right">
            <figure className="img-box">
              <img src="/img/고죠_7.jpg" alt="고죠" />
            </figure>
          </div>
       
        </div>

        <div className="bottom">
          <From list={list} setList={setList}/>
          <SubMenu list={list} setList={setList}/>
        </div>
      </div>
    </div>
  );
}

export default TodoList;