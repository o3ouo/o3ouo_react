import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
  list: [],
  status: "",

};

// action 타입의 문자열
export const getProducts = createAsyncThunk('List/fetchAll', async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  } catch(error) {
    console.error('error');
  }
})

const listSlice = createSlice({
  // 행동 지침의 3가지는 무조건 포함해야 한다.
  name: "List",
  initialState,
  reducers: {
    // getList(state, action) {
    //   state.list = action.payload.data
    //   console.log(state.list)
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state, action) => {
      // 요청 중 상태 업데이트 (로딩)
      state.status = "loading"
    })
    .addCase(getProducts.fulfilled,(state, action) => {
      // 요청 성공 상태 업데이트
      state.list = action.payload
      state.status = "succeeded"
    })
    .addCase(getProducts.rejected, (state, action) => {
      // 요청 실패 상태 업데이트
      state.status = "failed"
    })
  }
})

// pending : 요청 중 상태 업데이트
// fulfilled : 요청 성공 상태 업데이트 > api에 가져오는 데이터 저장
// rejuected : 요청 실패 상태 업데이트


export const {getList} = listSlice.actions;
export default listSlice.reducer;