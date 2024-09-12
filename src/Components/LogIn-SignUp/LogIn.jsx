import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

export const LogIn = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate('/schedule');
  }

  return (
    <div className="access flex justify-center items-center h-screen w-[100vw] min-h-screen bg-gray-900">
      <LoginForm onLogin={onLogin} />
    </div>
  );
};
