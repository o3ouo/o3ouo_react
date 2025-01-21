import { createStore } from 'redux';
import reducer from './reducer/reducer';

let store = createStore(reducer) 
// reducer : 매개변수(reducer) > store 안에는 reducer가 무조건 존재해야 한다.

export default store;