import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'
const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light navBar ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white" >Dev626</Link>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Blog">Blog</Link>
                    </li>  
                </ul>
                </div>
            </div>
        </nav>
        
    );
}
export default NavBar;