const initialState = {
  todos : [], // To-Do List
}

function reducer(state = initialState, action) {
  console.log(action);
  console.log(state.todos);
  switch (action.type) {
    case "ADD_TODO" :
      return {
        ...state,
        todos: [...state.todos, {id: Date.now(), text: action.payload.text, completed: false}]
      }
    case "TOGGLE_TODO" :
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
      }
    case "REMOVE" :
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload) // id가 같지 않은 값만 골라 return 하므로 클릭 했을 때 id가 같은 해당 항목만 제외
      }


    default :
      return {...state};
  }

}

export default reducer;