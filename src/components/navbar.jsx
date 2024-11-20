import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./serch";
import {  FaBars, FaTimes,FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl text-[rgb(23,224,167)]">
          s-store
        </div>

        <button
          onClick={handleToggle}
          className="lg:hidden text-white focus:outline-none"
        >
          <FaBars className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />

        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-16 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Account
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            <FaShoppingCart className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
    
          
          </NavLink>
          <Search />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            onClick={handleToggle}
            className="self-end text-white focus:outline-none"
          >
           <FaTimes className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
          </button>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            <FaShoppingCart className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
    
            
          </NavLink>
          <NavLink
            to="/account"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            account
          </NavLink>
          <Search onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
