import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

const Nav = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const location = useLocation();

  return (
    <nav>
      <ul className="nav-links">
        <Link to={{ pathname: '/', }}>Home</Link>
        <Link to='/favorites'>Favourites</Link>
        <li><input onChange={(e) => setSearch(e.target.value)} value={search} className="text-input" type='text' /></li>
      </ul>
    </nav>
  );
}

export default Nav;
