import { createStore } from 'redux';
import testReducer from './testReducer';

let testStore = createStore(testReducer);

export default testStore;