import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Class from './241220/Class';
// import Props from './241223/Props';
// import ClassProps from './241223/ClassProps';
// import PropsEx from './241223/PropsEx/PropsEx';
// import PropsEx from './241224/PropsEx/PropsEx';
// import State_ex_01 from './241224/State._ex_01js';
// import State_ex_02 from './241224/State_ex_02';
// import ClassState from './241224/ClassState';
// import Menu from './241226/Menu';
// import Game from './241227/Game/Game';
// import Game2 from './241227/Game2/Game2';
// import Spread from './241227/Spread';
// import ClassCount from './241230/ClassCount';
// import StopWatch from './241230/StopWatch';
// import Function from './241230/Function';
// import FCount from './241230/FCount';
// import Time from './241231/Time';
// import Event from './241231/Event';
// import Hook from './241231/Hook';
// import TodoList from './250102/TodoList';
// import StateTest from './250103/StateTest';
// import EffectTest from './250103/EffectTest';
// import TodoList_2 from './250106/TodoList/TodoList_2';
// import Api from './250106/Api';
// import ApiTest from './250106/ApiTest';
// import Sass from './20250107/Sass';
// import News from './250107/News/News';
// import News_2 from './250108/News_2';
// import Weather from './250108/Weather/Weather';
// import WeatherGpt from './250108/WeatherGpt/WeatherGpt';
// import WeatherSolo from './250109/WeatherSolo/WeatherSolo';
import { BrowserRouter } from 'react-router-dom';
// import Tss from './250110/Tss';
// import TestRouter from './250110/RouterTest/TestRouter'
// import App from './250113/App';
// import App from './250113/List/App';
// import App from './250114/App';
// import App from './250114/ShoppingTest/App';
// import App from './250115/App';
// import {Provider} from 'react-redux';
// Provider : store를 props로 받아 이를 하위 컴포넌트들에게 전달함. 하위 컴포넌트들은 별도의 props 전달 없이도 store에 접근할 수 있음.
// import store from './250120/redux/store';
// import App from './250120/App';
// import Test from './250120/test/Test';
// import testStore from './250120/test/testStore';
// import App from './250121/Cart/App'
// import store from './250121/Cart/store/store';
// import Todo from './250121/TodoList/Todo';
// import store from './250121/TodoList/store/strore';
// import Contact from './250121/Contact/Contact';
// import store from './250121/Contact/store/store';
// import App from './250122/App';
// import store from './250122/store/store';
// import App from './250123/middle/App';
// import store from './250123/middle/redux/store';
// import App from './250123/toolkit/App';
// import store from './250123/toolkit/redux/store';
// import App from './250124/App';
// import store from './250124/redux/store';
// import Reactquery from './250204/Reactquery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import App from './250206/App';
import App from './250206/spring/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
    // <BrowserRouter>
    //   {/* // <Provider store={store}> */}
    //   <QueryClientProvider client={queryClient}>
    //     <Reactquery />      
    //     {/* 빌드 전 지우고 빌드하면 됨 */}
    //     <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' /> 
    //     {/* initialIsOpen={false} 처음 열었을 때 자동으로 열 건지 말 건지 > true가 기본값, 버튼의 위치는 아래쪽의 오른쪽이 기본 */}
    //   </QueryClientProvider>
    //   {/* // </Provider> */}
    // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
