import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
import { FaSearch } from 'react-icons/fa'
// import pictureSource from "./cloud.png"

function Header() {
  return <div className="nav-container Header">
    <div className="row justify-content-center">
      {/* <Link to="/" className="col-1"><img alt="" src={pictureSource}></img></Link> */}
      <Link title="home" to="/" className="col-1">HOME</Link>
      <Link title="features" to="/" className="col-1">FEATURES</Link>
      <Link title="pictures" to="/" className="col-1">PICTURES</Link>
      <Link title="downloads" to="/" className="col-1">DOWNLOADS</Link>
      <Link title="support" to="/" className="col-1">SUPPORT</Link>
      <Link title="about" to="/About" className="col-1">ABOUT</Link>
      <Link title="search" to="/" className="col-1"><FaSearch className="search"></FaSearch></Link>
      <Link to="/" className="col-1" id="download-button">DOWNLOAD</Link>
    </div>
  </div>
}

export default memo(Header);
