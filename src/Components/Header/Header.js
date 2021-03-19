import React from 'react';

const Header = () => {
    return (
        <div className="background " >
        <nav className="container nav-bar mt-3 ">
            <a className="logo" href="">cityRiders</a>
            <div className="menu">
                <a href="home">Home</a>
                <a href="Review"> Destination </a>
                <a href="manage"> Blog</a>
                <a href="manage"> Contact</a>
            </div>
            <button className="login-btn"> Login </button>
        </nav>
    </div>
    );
};

export default Header;