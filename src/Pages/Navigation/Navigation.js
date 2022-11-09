import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from "../../assests/images/footer-gallery/food-safety.png";


const Navigation = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to="/home">Home</Link></li>
                            <li><Link href='/blog'>Blog</Link></li>
                            <li tabIndex={0}>
                                <Link to="/review">Review</Link>
                            </li>
                            <li><Link to="">My Reviews</Link></li>
                            <li><Link to="">Add Service</Link></li>
                            <li><Link to="">Login</Link></li>
                        </ul>
                    </div>
                    <img className='object-scale-down h-20 w-46 rounded' src={navIcon}></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link href='/home'>Home</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li >
                            <Link to="/review">Review</Link>
                        </li>
                        <li><Link to="">My Reviews</Link></li>
                        <li><Link to="">Add Service</Link></li>
                        <li><Link to="">Login</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;


