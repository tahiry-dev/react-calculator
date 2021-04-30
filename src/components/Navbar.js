import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div className="nav-container">
      <div className="nav-left">
        <h1>Math Magicians</h1>
      </div>
      <div className="nav-right">
        <span className="home-link"><Link to="/">Home </Link></span>
        <span className="calculator-link"><Link to="/calculator">Calculator </Link></span>
        <span className="quote-link"><Link to="/quote">Quote </Link></span>
      </div>
    </div>
  </div>
);
export default Navbar;
