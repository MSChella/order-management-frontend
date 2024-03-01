import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../pages/SignUpForm';
import styles from './style.css';




const Header = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light custom-header-bg ${styles.sticky}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Logo
                </Link>
                <div className="container d-flex justify-content-center">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-center px-5">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order-list">
                                    Orders
                                </Link>
                                <ul>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/placed-orders">
                                            Orders Placed
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/my-orders">
                                            My Orders
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex px-1">
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                    <Link className="nav-link" to="/signup">

                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
