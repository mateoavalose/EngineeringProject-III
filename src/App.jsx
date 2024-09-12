import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { LogIn } from './Components/LogIn-SignUp/LogIn';
import { SignUp } from './Components/LogIn-SignUp/SignUp';
import { Schedule } from './Components/ScheduleManagement/Schedule';
import { History } from './Components/ReserveHistory/History';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login logic
  const handleLogin = (username, password) => {
    if (username === '' && password === '') {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App max-w-[100vw]">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LogIn onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected route: Redirect to login if not authenticated */}
          <Route path="/schedule" element={isLoggedIn ? <Schedule onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/history" element={isLoggedIn ? <History onLogout={handleLogout} />: <Navigate to="/" />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
