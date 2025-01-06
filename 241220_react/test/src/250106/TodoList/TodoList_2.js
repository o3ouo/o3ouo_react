import React, {useState, useEffect} from 'react'
import Header from './Header'
import TodoCom from './TodoCom';
import Footer from './Footer';


function TodoList_2() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  // 컴포넌트가 처음 렌더링될 때만 실행
  // 새로고침을 해도 로컬스토리지에 남아있기 때문에 사라지지 않음
  useEffect(() => {
    const save = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(save);
    console.log("save :" + save);
  }, []);

  // todo 상태가 변경될 때 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  // todos가 변경될 때 실행

  const filterTodo = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const addTodo = (content) => {
    const newTodo = { id:Date.now(), content, completed:false } 
    // 내가 추가한 시간의 값을 id로 넣음 (밀리초 단위로 표준 시가 아님)
    // completed : 상태의 값
    setTodos([...todos, newTodo]);
    // todos의 상태가 newTodo가 되게
  }

  // 체크된 상태
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed : !todo.completed} : todo
    ));
  }

  // 제거
  const deletTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // id의 값이 다를 경우 
  }

  const clear = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

    //  리턴 밖에서 함수 제작시 중괄호 사용하면 됨
  return (
    // 리턴 안에서 함수를 만들어서 사용할 경우 소괄호를 사용해서 리턴
    <div>
      <h1>TodoList</h1>
      <Header addTodo={addTodo}/>
      {/* props로 함수 전달 */}
      <TodoCom todos={filterTodo} toggleTodo={toggleTodo} deletTodo={deletTodo}/>
      {/* todos의 값을 그대로 받아옴 */}
      <Footer filter={filter} setFilter={setFilter} clear={clear}/>
    </div>
  );
}

export default TodoList_2;