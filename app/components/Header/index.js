import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
import { FaSearch } from 'react-icons/fa'
import pictureSource from "./cloud.png"

function Header() {
  // return <div className="nav-container Header">
  //   <div className="row justify-content-center align-items-center">
  //     <Link to="/" className="col-1"><img alt="" src={pictureSource}></img></Link>
  //     <Link title="home" to="/" className="col-1">HOME</Link>
  //     <Link title="features" to="/About" className="col-1">FEATURES</Link>
  //     <Link title="pictures" to="/" className="col-1">PICTURES</Link>
  //     <Link title="downloads" to="/" className="col-1">DOWNLOADS</Link>
  //     <Link title="support" to="/" className="col-1">SUPPORT</Link>
  //     <Link title="about" to="/" className="col-1">ABOUT</Link>
  //     <Link title="search" to="/" className="col-1"><FaSearch className="search"></FaSearch></Link>
  //     <Link to="/" className="col-1 align-self-center" id="download-button">DOWNLOAD</Link>
  //   </div>
  // </div>

  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link"><img alt="" src={pictureSource}></img></Link>
        </li>
        <li className="nav-item active">
          <Link title="home" to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item active">
          <Link title="features" to="/" className="nav-link">FEATURES</Link>
        </li>
        <li className="nav-item active">
          <Link title="pictures" to="/" className="nav-link">PICTURES</Link>
        </li>
        <li className="nav-item active">
          <Link title="downloads" to="/" className="nav-link">DOWNLOADS</Link>
        </li>
        <li className="nav-item active">
          <Link title="support" to="/" className="nav-link">SUPPORT</Link>
        </li>
        <li className="nav-item active">
          <Link title="about" to="/About" className="nav-link">ABOUT</Link>
        </li>
        <li className="nav-item active">
          <Link title="search" to="/" className="nav-link"><FaSearch className="search"></FaSearch></Link>
        </li>
        <li className="nav-item active">
          <Link to="/" className="col-1 align-self-center" id="download-button">DOWNLOAD</Link>
        </li>
      </ul>
    </div>
  </nav>
}

export default memo(Header);
