import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login bg-gray-800 p-8 w-80 mx-auto rounded-lg shadow-lg">
      <h3 className="text-2xl text-[#03B4CE] py-2 mb-6 text-center">Login</h3>
      <img src="https://thunder.cdn.overdrive.com/logo-resized/9173?1691091170" alt="logo" className="w-1/2 mx-auto mb-6" />
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 bg-gray-200 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-200 rounded-md text-black"
        />
        <button
          type="submit"
          className="w-1/2 mx-auto py-2 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all">
          Login</button>
      </form>
      <p className="mt-6 text-center text-[#03B4CE]">
        New member? <a href="/signup" className="hover:underline">Sign up here!</a>
      </p>
    </div>
  );
};

export default LoginForm;
