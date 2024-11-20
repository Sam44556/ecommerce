import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useProvider } from '../../context/provider';

const Account = () => {
  const { user, logout } = useProvider(); // Use logout from the provider

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-4">
        {user ? (
          <button
            onClick={logout} // Call the logout function
            className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg"
          >
            <FaSignInAlt className="mr-2 text-xl" />
            Log out
          </button>
        ) : (
          <>
            <NavLink to="/login">
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                <FaSignInAlt className="mr-2 text-xl" />
                Log In
              </button>
            </NavLink>

            {/* Sign Up Button */}
            <NavLink to="/signup">
              <button className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out shadow-lg">
                <FaUserPlus className="mr-2 text-xl" />
                Sign Up
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
