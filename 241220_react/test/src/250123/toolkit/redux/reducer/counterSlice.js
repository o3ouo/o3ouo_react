import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  count: 0,
}

// function reducer (state = initialState, action) {
//   const { type, payload } = action;
//   console.log(action)

//   switch (type) {
//     case "PLUS" :
//       return { ...state, count: state.count + payload }
//     default :
//       return {...state}
//   }
// }

export const counterSlice = createSlice({
  name: 'counter', 
  initialState,
  reducers: {
    // 각각의 함수를 만듬
    plus(state, action) { // 화살표 함수 : plus: () => {} , 일반 함수 : plus(){}
      state.count += action.payload
    },
    minus(state, action) {
      state.count -= action.payload
    },
    multiply(state, action) {
      state.count *= action.payload
    }

  }
})


export const {plus, minus, multiply} = counterSlice.actions;
export default counterSlice.reducer;