import React from 'react';
import {useNavigate, Link} from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className="Navbar">
            <nav className="navbar">
                <article className="navart">
                    <div className="navdiv"> <h1>Welcome to Blog</h1> </div>
                    <div className="navdiv">About</div>
                    <div className="navdiv">Contact</div>
                    <div className="navdiv">Services</div>
                </article>
            </nav>
        </div>
  );
}

export default Header;
