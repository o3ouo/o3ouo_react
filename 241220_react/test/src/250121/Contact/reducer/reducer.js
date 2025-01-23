const saveState = {
  info: [], // 배열 안에 객체로 이름과 번호를 받을 것임
  keyword: "", // 검색 키워드 저장
}

function reducer (state = saveState, action) {
  const { type, payload } = action;

  switch(type) {
    case "SAVE" :
      return {...state, info: [...state.info,{id:Date.now(), name: payload.name, phoneNumber: payload.call, completed: false}]}
    case "SEARCH" :
      return {...state, info: state.info.filter(i => i.name === action.payload.searchText)}
      state.keyword = payload.searchText;
      break;
    default :
      return {...state}
  }
}
export default reducer;