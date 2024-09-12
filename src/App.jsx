import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { LogIn } from './Components/LogIn-SignUp/LogIn';
import { SignUp } from './Components/LogIn-SignUp/SignUp';
import { Schedule } from './Components/ScheduleManagement/Schedule';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login logic
  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LogIn onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected route: Redirect to login if not authenticated */}
          <Route path="/schedule" element={isLoggedIn ? <Schedule onLogout={handleLogout} /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
