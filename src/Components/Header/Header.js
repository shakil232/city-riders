import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import fakeData from '../../fakeData/Data.json'
import Home from '../Home/Home';


const Header = () => {
    const [rides, setRides] = useState([])
   
    useEffect(() => {
        setRides(fakeData)
    }, [])

    return (
        <div className="background  " >
            
            <div className="  row row-cols-md-5 row-cols-sm-1 mt-5 p-5 ride-icon">
                {
                    rides.map(ride => <Home ride={ride}></Home>)
                }
            </div>
            
        </div>
    );
};

export default Header;