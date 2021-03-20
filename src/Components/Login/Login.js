import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
      const [user, setUser] = useContext(UserLoginContext) ;
      const history = useHistory();
      const location = useLocation();
      const { form } = location.state || { from: { pathname: "/" } };

    // AllProviders
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const FacebookProvider = new firebase.auth.FacebookAuthProvider();
    
    //  handleSubmit
    const handleSubmit =(e)=>{
        if( user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
              console.log(res)
            })
            .catch((error) => {
              
              var errorMessage = error.message;
              console.log(errorMessage)
            });
        }
        e.preventDefault();
    }
    // SignWithEmail&Password
    const handleSignIn = (e) => {
        let isFieldValid;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
           
        }
       if( e.target.name === "password"){
           const isPasswordValid = e.target.value.length > 6 ;
           const PasswordNumber = /\d{1}/.test(e.target.value);
           isFieldValid = isPasswordValid && PasswordNumber
       }
       if( isFieldValid ){
           const {displayName, email} = {...user};
            const NewUserInfo  = { name: displayName , email } ;
           setUser(NewUserInfo)
       }
    }

    // SignWithGoogle
    const handleGoogleSign = () => {
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const userLogin = { name: displayName , email };
                setUser(userLogin);
                history.replace(form)
               
            }).catch((error) => {
                const  errorMessage = error.message;
                setUser(errorMessage)
            });
    }

    // SignWithFacebook
    const handleFacebookSign = () => {
        firebase
            .auth()
            .signInWithPopup(FacebookProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const userLogin = { name: displayName , email };
                setUser(userLogin);
                history.replace(form)
               
            })
            .catch((error) => {
                const  errorMessage = error.message;
                setUser(errorMessage)
            });
    };
    
    
    return (
        <div className="container">
             <p className="user-name text-center"> {user.name}</p>
            <form onClick={handleSubmit} className="form-area text-center mt-3">
                <p className="form-header"> Create an account </p><br />

                <input className="inputs" onBlur={handleSignIn} type="text" name="name" placeholder="Name" required /><br />
                <input className="inputs" onBlur={handleSignIn} type="email" name="email" placeholder=" Email" required /><br />
                <input className="inputs" onBlur={handleSignIn} type="password" name="password" placeholder="Password" required /><br />
        
                <input className="submit" type="submit" value="Create an account" /><br />

                <p><small id="account"> Already have an account?</small><a href="x"><small id="login" >Login</small></a></p>
                <p id="or">Or, <span className="continue-text"> Continue With </span></p>

                <FontAwesomeIcon onClick={handleGoogleSign} className="social-icon google" icon={faGooglePlus} />
                <FontAwesomeIcon onClick={handleFacebookSign} className="social-icon facebook" icon={faFacebook} />
                <Link to="/header"><button className="back-home mt-1 mb-5"> Bact To Home </button></Link>
            </form>

        </div>
    );
};

export default Login;