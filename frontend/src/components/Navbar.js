import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';


const Navbar = ({clickevent}) => {
    return (
        <nav className="navbar">
            {/* {logo} */}
            <div className="navbar__logo">
                <h2>React Stores</h2>
            </div>
            {/* Links */}
            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/*Icon  */}
                         <i className="fas fa-shopping-cart"></i>
                        <span >Cart
                            <span className="cartlogo_badge">5</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      See all items
                        
                    </Link> 
                </li>
            </ul>

            {/* Hamburger menu */}
            <div className="hamburger_menu" onClick={clickevent}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
