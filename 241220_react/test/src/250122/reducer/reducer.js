let initialState = {
  contList : [],
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  console.log(action);
  console.log(state.contList)
  switch (type) {
    case "ADD" :
      return {
        ...state, contList: [...state.contList, {name: payload.name, phone: payload.phone}]
      }
    case "SEARCH_NAME" :
      return {
        ...state, keyword: payload.keyword
      }
      
    default :
      return {...state}
  }

}
 
export default reducer;