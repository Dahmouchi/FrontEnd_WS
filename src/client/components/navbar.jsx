import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
    <>
        <nav>
            <div class="wrappers">
                <div class="logo"><a href="#">Logo</a></div>
                <input type="radio" name="slider" id="menu-btn"/>
                <input type="radio" name="slider" id="close-btn"/>
                <ul class="nav-links">
                    <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                    <li><Link className="a" to="/">Home</Link></li>
                    
                    <li><Link className="a" to="/login">Login</Link></li>
                    <li><Link className="a" to="/sinup">SinUp</Link></li>
                    <li>
                    <Link className="a" to="/cart">
                        <ShoppingCart size={32} />
                    </Link>
                    </li>
                </ul>
                <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
            </div>
        </nav>
    </>
        
        
    );
};
