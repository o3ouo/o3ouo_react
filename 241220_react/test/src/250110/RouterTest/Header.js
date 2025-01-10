import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <Link to="/">
            <img src="/250110_router_test/logo.png" alt="logo" />
          </Link>
        </h1>

        <nav className="nav">
          <ul>
            <li><Link to="/About">YOO YOUNGKUK</Link></li>
            <li><Link to="/Archives">ARCHIVES</Link></li>
            <li><Link to="/Foundation">FOUNDATION</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;