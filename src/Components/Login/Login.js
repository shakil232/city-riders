import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserLoginContext } from '../../App';


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const [login, setLogin] = useState(true);
    const [user, setUser] = useContext(UserLoginContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // AllProviders
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const FacebookProvider = new firebase.auth.FacebookAuthProvider();

    //  handleSubmit
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUserInfo = { ...user };
                    NewUserInfo.error = '';
                    NewUserInfo.success = true;
                    setUser(NewUserInfo);
                    history.replace(from)
                })
                .catch((error) => {
                    const NewUserInfo = { ...user };
                    NewUserInfo.error = error.message;
                    NewUserInfo.success = false;
                    setUser(NewUserInfo)
                });
        }
        e.preventDefault();
    }
    // SignWithEmail&Password
    const handleSignIn = (e) => {
        let isFieldValid;
        if (e.target.name === "name") {
            isFieldValid = e.target.value.length > 4;
        }
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const PasswordNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && PasswordNumber
        }
        if (isFieldValid) {
            const NewUserInfo = { ...user };
            NewUserInfo[e.target.name] = e.target.value;
            setUser(NewUserInfo)
        }
    }

    // SignWithGoogle
    const handleGoogleSign = () => {
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userLogin = { name: displayName, email };
                setUser(userLogin);
                history.replace(from)

            }).catch((error) => {
                const errorMessage = error.message;
                setUser(errorMessage)
            });
    }

    // SignWithFacebook
    const handleFacebookSign = () => {
        firebase
            .auth()
            .signInWithPopup(FacebookProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userLogin = { name: displayName, email };
                setUser(userLogin);
                history.replace(from)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setUser(errorMessage)
            });
    };


    return (
        <div className=" log-background">
            <div className="from">
                {login ? <form onClick={handleSubmit} className="form-area text-center mt-3">
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {
                        user.success && <p style={{ color: 'green' }}>User Create Successfully </p>
                    }
                    <p className="form-header"> Create an account </p><br />

                    <input className="inputs" onBlur={handleSignIn} type="text" name="name" placeholder="Name" required /><br />
                    <input className="inputs" onBlur={handleSignIn} type="email" name="email" placeholder=" Email" required /><br />
                    <input className="inputs" onBlur={handleSignIn} type="password" name="password" placeholder="Password" required /><br />

                    <input className="submit" type="submit" value="Create an account" /><br />

                    <p><small id="account"> Already have an account?</small> <small id="login" onClick={() => setLogin(false)}  >Login</small>  </p>

                </form> :

                    <form action="" className="login-area">
                        <p className="form-header"> Login </p><br />

                        <input className="inputs" onBlur={handleSignIn} type="email" name="email" placeholder=" Email" required /><br />
                        <input className="inputs" onBlur={handleSignIn} type="password" name="password" placeholder="Password" required /><br />

                        <input className="login-button" type="submit" value="Login" /><br />

                        <p><small id="account"> Don't have an account?</small> <small id="login" onClick={() => setLogin(true)}  > Create an account </small></p>
                    </form>}

                <div className="continue-area">
                    <p id="or">Or</p>

                    <h5 onClick={handleGoogleSign} >
                        <FontAwesomeIcon className="social-icon google" icon={faGooglePlus} />
                    Continue With Google </h5>
                   <h5>
                        <FontAwesomeIcon className="social-icon facebook" icon={faFacebook} />
                    Continue With Facebook </h5>
                </div>
            </div>


        </div>
    );
};

export default Login;