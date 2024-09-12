import { useState } from 'react';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <div className="signUp w-[100vw] min-h-screen flex justify-center items-center bg-gray-900">
      <div className="signup-form bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl text-[#03B4CE] mb-6 text-center">Sign Up</h3>
        <img src="https://thunder.cdn.overdrive.com/logo-resized/9173?1691091170" alt="logo" className="w-1/2 mx-auto mb-6" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block text-[#03B4CE]">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
          />

          <label htmlFor="email" className="block text-[#03B4CE]">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
          />

          <label htmlFor="password" className="block text-[#03B4CE]">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
          />

          <label htmlFor="confirmPassword" className="block text-[#03B4CE]">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
          />

          <button
            type="submit"
            className="w-1/2 mx-auto py-2 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all"
          >
            Sign Up
          </button>

          <p className="text-center text-[#03B4CE] mt-4">
            Already a member? <a href="/" className="hover:underline">Log in here!</a>
          </p>
        </form>
      </div>
    </div>
  );
};
