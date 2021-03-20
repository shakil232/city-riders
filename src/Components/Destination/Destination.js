import React, { useContext } from 'react';
import './Destination.css'
import mapImage from '../../images/Map.png'
import { UserLoginContext } from '../../App';


const Destination = () => {
    const [ user] = useContext(UserLoginContext);


    const handleDestination = () => {}

    
    return (
        <div className="container">
            <p className="user-name text-center"> {user.name}</p>
            <div className="ride mt-4">
                <div className="destination-search">
                    <label className="label"> Pick From </label><br />
                    <input className="search-input" onClick={handleDestination} type="text" name="name" /><br />
                    <label className="label"> Pick To </label><br />
                    <input className="search-input" onClick={handleDestination} type="text" name="name" /><br />
                    <button  className="search-btn"> Search</button>
                    
                </div>

                <div className="map">
                    <img src={mapImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;