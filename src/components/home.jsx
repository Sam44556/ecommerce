import React from 'react';
import sImage from './s.jpg'; 
import { NavLink } from 'react-router-dom';
import { useProvider } from '../context/provider';

function Home() {
  const { user ,userId} = useProvider();
  
console.log(userId);
  return (
    <div className="container mx-auto my-12 px-2">
      <div className="flex flex-col md:flex-row items-center py-10 px-6 md:px-12">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img
            src={sImage}
            alt="Store Display"
            className="object-cover w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          {!user ? (
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#01051e]">
              Welcome to Our Store!
            </h1>
          ) : (
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#01051e]">
              Welcome, {user.name}! Welcome to Our Store!
            </h1>
          )}
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Discover a wide range of products that cater to all your needs. From the latest fashion to home essentials, we have everything you need to make your shopping experience delightful. Explore our collection and find your favorite items today!
          </p>

          {/* Centered Button */}
          <div className="flex justify-center md:justify-start">
            <NavLink to={`/product`}>
              <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
