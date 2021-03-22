import React, { useContext } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { UserLoginContext } from '../../App';


const Nav = () => {
    const [ user, setUser ] = useContext(UserLoginContext)
    return (
        <div>
            <nav className="container nav-bar mt-3  ">
                <Link className="logo" to="/destination"> cityRiders </Link>
                <div className="menu">
                    <Link to="/header">Home</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>

                </div>
               {user.name ? <p className="user-name ml-4"> {user.name}</p> :<Link to="/destination"><button className="login-btn"> Login </button></Link>}
                 
                
            </nav>
        </div>
    );
};

export default Nav;