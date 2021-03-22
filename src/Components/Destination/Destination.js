import React, { useState } from 'react';
import './Destination.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'



const containerStyle = {
    width: '500px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Destination = () => {
    const [display, setDisplay] = useState(true);
    const [detail, setDetails] = useState({

        rideName: "Bike",
        cost: 70,
        ticket: 1,
        rideImage: "https://i.ibb.co/dmYC99H/bike.jpg"
    });

    return (
        <div className="container">
            <div className="ride mt-4 ">
                <div className="destination-search">

                    {display ? <div className="input-area">
                        <label className="label"> Pick From </label><br />
                        <input id="pick-from" className="search-input" type="text" name="name" /><br />
                        <label className="label"> Pick To </label><br />
                        <input id="pick-to" className="search-input" type="text" name="name" /><br />
                        <button className="search-btn" onClick={() => setDisplay(false)}> Search </button>
                    </div> :

                        <div className="destination-detail mt-5">
                            <div className="destination">
                                <h4> Mirpur 10 </h4>
                                <p className="text-center to"> To</p>
                                <h4> Dhanmondi </h4>
                            </div>

                            <div className="confirm d-flex justify-content-start align-items-center">
                                <img className="ride-logo" src={detail.rideImage} alt="" />
                                <p className="">{detail.rideName}</p>
                                <p><FontAwesomeIcon className="icon" icon={faUserFriends} />{detail.ticket}</p>
                                <p> $ {detail.cost}</p>
                            </div>
                            <div className="confirm d-flex justify-content-start align-items-center mt-2">
                                <img className="ride-logo" src={detail.rideImage} alt="" />
                                <p className="">{detail.rideName}</p>
                                <p><FontAwesomeIcon className="icon" icon={faUserFriends} />{detail.ticket}</p>
                                <p> $ {detail.cost}</p>
                            </div>
                            <div className="confirm d-flex justify-content-start align-items-center mt-2">
                                <img className="ride-logo" src={detail.rideImage} alt="" />
                                <p className="">{detail.rideName}</p>
                                <p><FontAwesomeIcon className="icon" icon={faUserFriends} />{detail.ticket}</p>
                                <p> $ {detail.cost}</p>
                            </div>
                            <button className="search-btn" onClick={() => setDisplay(true)}>Back  Again Search </button>
                        </div>}
                </div>

                <div className="map">
                    {/* <img src={mapImage} alt="" /> */}
                    <LoadScript
                        googleMapsApiKey="AIzaSyAHuya2gdkvNQ5ZYzN84Swk-2ymNROeaTM"                   >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <></>
                        </GoogleMap>
                    </LoadScript>
                </div>

            </div>
        </div>
    );
};

export default Destination;