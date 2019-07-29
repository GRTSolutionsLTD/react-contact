import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

function Header() {
  return <div className="nav-container Header">
    <div className="row justify-content-center">
      <Link to="/" className="col-2 bg-danger align-items-center">Home</Link>
      <Link to="/About" className="col-2 bg-success">About</Link>
    </div>
  </div>
}

export default memo(Header);
