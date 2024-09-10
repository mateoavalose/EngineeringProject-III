import React from 'react';
import { useState } from 'react';
import { Schedule } from '../../assets/ScheduleManagement/Schedule';

export const LogIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    return (
        <div className="access">
            {isLoggedIn ? (
                <div className="loggedIn">
                    <button onClick={handleLogout}>Logout</button>
                    <Schedule />
                </div>
            ) : (
                <div className="login">
                    <h3>Login</h3>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="button" onClick={handleLogin}>Login</button>
                    </form>
                    <p>New member? <a href="/signup">Sign up here!</a></p>
                </div>
            )}
        </div>
    );
};