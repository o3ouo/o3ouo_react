import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return(
    <div>
      <h1><Link to='/'>홈</Link></h1>
      <ul>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Prod">Prod</Link></li>
      </ul>
    </div>
  )
}

export default Nav;