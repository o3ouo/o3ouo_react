import React, {useState} from 'react';

function Menu(list, setList) {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Checked</a></li>
        <li><a href="#">Not Checked</a></li>
      </ul>
    </nav>
  );
}

export default Menu;