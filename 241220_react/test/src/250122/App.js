import React from 'react'
import './App.css'
import Form from './Component/Form';
import List from './Component/List';

const App = () => {
  return ( 
    <div className="section">
      <h1>CONTACT</h1>
      <div className="contents">
        <Form />
        <List />
      </div>
    </div>
  );
}
 
export default App;