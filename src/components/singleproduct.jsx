import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProvider } from '../context/provider';
import { useHttpClient } from './hooks/useHttpClient';

function SingleProduct() {
  const { sendRequest } = useHttpClient();
  const { id } = useParams();
  const { products, cartItems, addItemToCart, userId } = useProvider();
  const navigate = useNavigate();
 
  
  // Find product by id
  const sp = products.find(pro => pro.id === parseInt(id));

 
  

  // Check if product is in cart
  const isFound = cartItems.some(item => item.id === sp?.id);
 

  // Handle Add to Cart
  const handleAddToCart = async (e) => {
    e.preventDefault();
    console.log("UserId:", userId); // Check if userId is available

    if (!sp) return; // Ensure sp is defined before proceeding

    const items = {
      id: sp.id,
      name: sp.name,
      image: sp.image,
      price: sp.price,
      quantity: 1,
    };

    addItemToCart(items);

    try {
      await sendRequest(
        'http://localhost:500/user', // Corrected URL endpoint
        'POST',
        JSON.stringify({
          title: sp.name,
          quantity: 1,
          image: sp.image,
          itemid: sp.id,
          creator: userId
        }),
        { 'Content-Type': 'application/json' }
      );
      console.log("Product added to cart successfully!");
    } catch (err) {
      console.error(err); // Error handling
    }

    navigate(-1); // Navigate back after adding to cart
  };

  if (!sp) {
    return <p>Product not found!</p>; // Fallback for invalid product
  }

  return (
    <div className="container mx-auto my-12 px-2">
      <div className="flex flex-col md:flex-row items-center py-10 px-6 md:px-12 border-2 border-gray-300 p-4 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img 
            className="object-cover w-full h-80 rounded-lg" 
            src={sp.image} 
            alt={sp.name} 
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left text-black font-bold">
          <h3 className="text-2xl mb-4">{sp.name}</h3>
          <h4 className="text-xl mb-4">
            Price: <strong>${sp.price}</strong>
          </h4>
          <p className="mb-6">{sp.description}</p>

          {!isFound ? (
            <button 
              className="px-6 py-2 bg-yellow-500 text-black mx-6 font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg mb-4 md:mb-0"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          ) : (
            <p className="text-red-500 mb-4">You already added it to your cart</p>
          )}

          <button 
            className="px-6 py-2 bg-yellow-500 text-black mx-6 font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
