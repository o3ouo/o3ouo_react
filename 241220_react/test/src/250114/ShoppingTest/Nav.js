import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav({menuList, menuClick}) {

  return (
    <nav className="nav">
      <ul>
        {
          menuList.map((menu, idx) => (
            <li key={idx} onClick={() => menuClick(menu)}>{menu}</li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Nav;