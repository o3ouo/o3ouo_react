let initialState = {
  count : 0,
  id: "",
  pw: "",
}

// reducer : 순수함수
// 두 가지의 값을 받는다. state, action
function reducer (state = initialState , action) {
  console.log("action", action)
  // dispatch로 던진 값은 action으로 들어온다

  //  조건문으로 행동지침 제작
  // if (action.type == "PLUS") {
  //   return {...state, count : state.count + 1}
  // }

  // return {...state}
  // 다시 리턴을 시켜줘야 함, store에 대한 값이 변경 됐다고 한 번 더 반환 해야 인식이 된다.

  switch (action.type) {
    case "PLUS" : 
      return {...state, count: state.count + action.payload.num};

    // 최종 리턴
    case "MINUS" :
      return {...state, count: state.count > 0 ? (state.count -1) : (state.count)};
    
    case "LOGIN" :
      return {
        ...state, id: action.payload.id,
        pw: action.payload.pw
      }

    default : 
      return {...state};
  }

}

export default reducer;