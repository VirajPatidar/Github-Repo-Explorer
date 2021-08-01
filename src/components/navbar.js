import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    
    const [isActive, setisActive] = React.useState(false);

    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">Github Repo Explorer</a>
                </Link>
                <a
                    onClick={() => {setisActive(!isActive)}}
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link href="/">
                        <a className="navbar-item">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="navbar-item">About</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;