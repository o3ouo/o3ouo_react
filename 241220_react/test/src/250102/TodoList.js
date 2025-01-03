import React, {useState, useEffect} from 'react';
import './css/TodoList.css';
import From from './From';
import List from './List';
import Menu from './Menu';
import SubMenu from './SubMenu';

function TodoList() {
  
  // list 상태 선언 / list 업데이트 / 초기 값은 빈 배열
  const [list,setList] = useState([]);
  // 필터 조건 관리
  const [filterType, setFilterType] = useState("All");

  const addTask = (text) => {
    if (text.trim() === '') return;

    const newTask = {
      id: Date.now(), // 고유 ID 생성
      text,
      checked: false,
    };

    setList(prev => [...prev, newTask]);
  };

  return (
    <div className="wrap">
      <div className="container">
        <div className="top">
          <div className="left">
            <h1 className="title">To Do List</h1>
            <Menu list={list} setFilterType={setFilterType} />
            <List 
              list={list}
              setList={setList}
              filterType={filterType}
              />
          </div>
          <div className="right">
            <figure className="img-box">
              <img src="/img/고죠_7.jpg" alt="고죠" />
            </figure>
          </div>
       
        </div>

        <div className="bottom">
          <From addTask={addTask}/>
          <SubMenu list={list} setList={setList}/>
        </div>
      </div>
    </div>
  );
}

export default TodoList; 