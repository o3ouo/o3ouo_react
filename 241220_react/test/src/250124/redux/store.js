// 툴킷 버전을 사용할 때에는 configureStore 사용
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducer/listslice"

const store = configureStore({
  reducer: {
    List: listReducer
  }
});

export default store;