let initialState = {
  list: [],
}

function reducer (state = initialState, action) {
  console.log(action);
  let {type, payload} = action;
  console.log(state.list)
  switch(type) {
    case "LIST" :
      return { ...state, list: payload}
    
    default: 
      return { ...state }
  }
}

export default reducer;