// @ts-ignore
import React, { useState } from 'react';
import '../styles/loginPage.css';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import GoogleLogin from '@leecheuk/react-google-login';

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const navigate = useNavigate();

    // @ts-ignore
    const responseGoogle = (response) => {
        console.log(response);
        // Perform any desired actions with the Google login response here

        setIsLoggedIn(true); // Set the login status to true after successful login
    };

    // Function to handle button click after successful login
    const handleButtonClick = () => {
        if (isLoggedIn) {
            navigate('/homepage'); // Redirect to the other page only if logged in
        } else {
            alert('Please log in with Google first.'); // Show an alert if not logged in
        }
    };

    return (
        <div className="main-div">
            <div className="navbar">
                <div className="navbar-links">
                    <a href="#">DashBoard</a>
                    <a href="#">Login Page</a>
                    <a href="#">Orders Page</a>
                    <a href="#">Setting Page</a>
                    <a href="#">User Page</a>
                </div>
            </div>
        <div className="login-container">
            
            <div className="centered-content">
                <h2>Login with Google</h2>
                <GoogleLogin
                    className="google-login-button"
                    clientId="869987737546-s4v9tsrjptehljdpoq5fgqr6kudcj9um.apps.googleusercontent.com"
                    buttonText="Google ile Giriş Yap"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <button onClick={handleButtonClick}>Go to DashBoard</button>
            </div>
        </div>
        </div>
    );
}

export default LoginPage;
