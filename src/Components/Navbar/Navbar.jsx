import React from 'react';
import {Link} from "react-router-dom";
import {MenuIcon} from "../../Exports/svg";
import './Navbar.css';
const Navbar = () => {
    return (
        <header>
            <Link to='/' className='logo'>GameClub</Link>
            <ul>
                <li>
                    <Link to='/admin'>Admin Panel</Link>
                </li>
                <li>
                    <Link to='*'>Sign in</Link>
                </li>
            </ul>
            <button href="#" className='menu'>{MenuIcon}</button>
        </header>
    );
};

export default Navbar;