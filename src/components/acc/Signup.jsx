import React, { useState } from 'react';
import { useHttpClient } from '../hooks/useHttpClient'; // Import the custom hook
import { useProvider } from '../../context/provider';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const { isLoading, error, sendRequest } = useHttpClient(); // Using the hook
  const { login,updateUserId,} = useProvider();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Proceed with signup if email does not exist
      const responseData = await sendRequest(
        'http://localhost:500/signup', 
        'POST', 
        JSON.stringify({
          name: name,
          email: email,
          password: password
        }), 
        { 'Content-Type': 'application/json' }
      );

      console.log(responseData); // Handle successful signup (e.g., redirect or show message)
      login(responseData.name);
     
  
  updateUserId(responseData.userId);
      
      navigate('/');
    } catch (err) {
      // Error is handled by the hook
      console.error(err); // Optionally log the error
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2  text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading} 
          className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
