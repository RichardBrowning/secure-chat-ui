import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import { getBuild } from './helpers/loginHelper';

// import { Stomp } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';
// import 'stomp-websocket';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn'));
    
    // login action handler
    const handleLogin = async () => {
        getBuild()
        .then(data => {
            // if server returns 200, set isLoggedIn true
            if (data.length > 0) {
                // set logged in 
                sessionStorage.setItem('isLoggedIn', 'true');
                //sessionStorage.setItem('build', data); // default build number
                sessionStorage.setItem('build_code', data);
                setIsLoggedIn('true');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <>
            { (isLoggedIn === 'true') ? <MainPage buildCode={sessionStorage.getItem('build_code')}/> : <LoginPage onLogin={handleLogin} />}
        </>
    );
}

export default App;