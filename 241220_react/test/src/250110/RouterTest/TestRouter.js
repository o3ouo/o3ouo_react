import React from "react";
import {Routes, Route} from 'react-router-dom';
import './css/RouterTest.css';
import Header from './Header';
import Main from './Main'
import About from './About';
import Archivs from './Archives';
import Foundation from './Foundation';
import Footer from './Footer';


function TestRouter() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Archives' element={<Archivs />}></Route>
        <Route path='/Foundation' element={<Foundation />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default TestRouter;