import React from 'react';
import { useState } from 'react';

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
                    <h3>Home</h3>
                </div>
            ) : (
                <div>
                    <div className="login">
                    <h3>Login</h3>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="button" onClick={handleLogin}>Login</button>
                    </form>
                    <p>New member? <a href="/signup">Sign up here!</a></p>
                    </div>
                </div>
            )}
        </div>
    )
}