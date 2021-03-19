import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    return (
        <div className="container">
            
                <form action="" className="form-area text-center mt-3">
                    <p className="form-header"> Create an account </p><br />
                    <input className="inputs" type="text" name="name" placeholder="Name" required /><br />
                    <input className="inputs" type="email" name="email" placeholder=" Email" required /><br />
                    <input className="inputs" type="password" name="password" placeholder="Password" required /><br />
                    <input className="inputs" type="password" name="password" placeholder="Confrim Password" required /><br />
                    <input className="submit" type="submit" value="Create an account" /><br />
                    <p><small id="account"> Already have an account?</small><a href="x"><small id="login">Login</small></a></p>
                    <p><small id="or">Or</small></p>
                    <button className="continue-btn"> Continue With Google </button><br/>
                    <button className="continue-btn mt-1"> Continue With Facebook </button>
                    <Link to="/header"><button className="back-home mt-1 mb-5"> Bact To Home </button></Link>
                </form>
                
        </div>
    );
};

export default Login;