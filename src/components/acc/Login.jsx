import React, { useState, useContext } from 'react';
import { useHttpClient } from '../hooks/useHttpClient'; // Import the custom hook
import { useProvider } from '../../context/provider'; // Import your context
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isLoading, error, sendRequest } = useHttpClient(); // Using the hook
  const { login, updateUserId, addItemToCart } = useProvider(); // Get the login function from your context
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const fetchAvailablePlaces = async (userId) => {
    const controller = new AbortController();
  
    try {
      const response = await sendRequest(
        `http://localhost:3000/user/${userId}`, // Corrected URL path
        'GET',
        null,
        { 'Content-Type': 'application/json', signal: controller.signal } // Attach signal
      );
  
      console.log("API Response:", response);
  
      if (response && response.places) {
        setAvailablePlaces(response.places);
  
        response.places.forEach(place => {
          addItemToCart({
            id: place.id,
            name: place.name,
            image: place.image,
            price: place.price,
            quantity: place.quantity,
          });
        });
      } else {
        console.warn("No places found in the response.");
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log("Fetch aborted.");
      } else {
        console.error("Error fetching available places:", err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Proceed with login request
      const responseData = await sendRequest(
        'http://localhost:500/login', 
        'POST', 
        JSON.stringify({
          email: email,
          password: password
        }), 
        { 'Content-Type': 'application/json' }
      );

      // Assuming the response contains user info like username
      login(responseData.name);
      updateUserId(responseData.userId); // Set user in context
      console.log(responseData); // Handle successful login (e.g., redirect, store token)
      
      // Fetch available places for the logged-in user
      await fetchAvailablePlaces(responseData.userId);

      navigate('/');
      
    } catch (err) {
      console.error(err); // Optionally log the error
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    
      <form onSubmit={handleSubmit} className="space-y-6">
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
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
