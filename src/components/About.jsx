import React from "react";
import { FaInstagram, FaTelegramPlane, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importing social media icons

function About() {
  return (
    <>
      <div className="intro-about text-center py-10">
        <h1 className="text-4xl font-bold mb-4 text-white">About Our Platform</h1>
        <p className="text-xl text-gray-200">
          Welcome to our top e-commerce platform that offers a seamless shopping experience!
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        <div className="about-box bg-white bg-opacity-50 p-6 rounded-lg shadow-lg flex-1 text-center">
          <h2 className="text-2xl font-bold mb-4">Customer Service</h2>
          <p className="text-gray-800">
            We strive to provide our customers with a wide range of high-quality products at competitive prices, delivered with exceptional customer service.
          </p>
        </div>
        <div className="about-box bg-white bg-opacity-50 p-6 rounded-lg shadow-lg flex-1 text-center">
          <h2 className="text-2xl font-bold mb-4">How Our Platform Works</h2>
          <p className="text-gray-800">
            Our platform is designed for speed, responsiveness, and the ability to seamlessly collaborate with other platforms, ensuring a smooth and efficient shopping experience for our users.
          </p>
        </div>
        <div className="about-box bg-white bg-opacity-50 p-6 rounded-lg shadow-lg flex-1 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <p className="text-gray-800 mb-4">Find us on:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-600 hover:text-pink-500 transition duration-300" /><br></br>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-3xl text-blue-500 hover:text-blue-400 transition duration-300" />
            </a><br></br>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-blue-700 hover:text-blue-600 transition duration-300" />
            </a><br></br>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-300 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
