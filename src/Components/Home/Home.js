import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = (props) => {
    const { rideName, rideImage, id } = props.ride
    return (
        <div className="container">
            <div className="ride-card">
                <img src={rideImage} alt="" />
                <h5> {rideName}</h5>
                <Link to="/login"><button className="booked-btn mt-2"> Booked Now</button></Link>
            </div>
        </div>
    );
};

export default Home;