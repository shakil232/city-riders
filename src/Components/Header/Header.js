import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import fakeData from '../../fakeData/Data.json'
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import { UserLoginContext } from '../../App';


const Header = () => {
    const [rides, setRides] = useState([])
    const [ user] = useContext(UserLoginContext)
    useEffect(() => {
        setRides(fakeData)
    }, [])

    return (
        <div className="background  " >
            <nav className="container nav-bar mt-3 ">
                <Link className="logo" to="/header"> cityRiders </Link>
                <div className="menu">
                    <Link to="/header">Home</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    
                </div>
                <Link to="/destination"><button className="login-btn"> Login </button></Link>
                <p className="user-name ml-4"> {user.name}</p>    
            </nav>
            <div className="  row row-cols-md-5 row-cols-sm-1 mt-5 p-5 ride-icon">
                {
                    rides.map(ride => <Home ride={ride}></Home>)
                }
            </div>
            
        </div>
    );
};

export default Header;