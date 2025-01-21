const iState = {
  cart : [], // cart의 초기값
}

function reducer(state = iState, action) {
  console.log(action)
  switch(action.type) {
    case "ADD_TO_CART" :
      const Item = state.cart.find(item =>item.id === action.payload.id);
      if(Item) {
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? {...item, cout: item.count +1} : item)
        }
      }
    return {
      ...state, cart:[...state.cart, {...action.payload, count: 1}]
    }
    case "PLUS_COUNT" :
      return {
        ...state, cart: state.cart.map(item => item.id === action.payload.id ? {...item, count: item.count + 1} : item)
      }
    case "MINUS_COUNT" :
      return {
        ...state, cart: state.cart.map(item => item.id === action.payload.id && item.count > 1 ? {...item, count: item.count - 1} : item)
      }
    case "REMOVE" :
      return {
        ...state, cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    // state 값이 바뀌도록 새롭게 추가해줘야 함
    default:
      return{...state};
  } 
}

export default reducer;