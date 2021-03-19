import React from 'react';
import './Destination.css'
import mapImage from '../../images/Map.png'

const Destination = () => {
    return (
        <div className="container">
            <div className="ride mt-4">
                <div className="destination-search">
                   
                </div>

                <div className="map">
                    <img src={mapImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Destination;