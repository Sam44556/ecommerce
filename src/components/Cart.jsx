import React, { useState, useEffect } from "react";
import { useProvider } from '../context/provider';
import { useHttpClient } from './hooks/useHttpClient';


function Car() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, setCartItems,deleteItem,userId} = useProvider();
 
    const { sendRequest } = useHttpClient();
  useEffect(() => {
    // Recalculate total items and total price whenever cartItems change
    setTotalItems(cartItems.reduce((total, item) => total + item.quantity, 0));
    setTotalPrice(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  function clear() {
    setCartItems([]);
  }

  const increaseAmount =async (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
    try {
      const responseData = await sendRequest(
        'http://localhost:500/yu', // Corrected URL endpoint
        'GET',
        JSON.stringify({
          userId:userId,
        itemId:item.id,
           des:"add",
        
         
        }),
        { 'Content-Type': 'application/json' }
      );
   console.log("vjbbj");
    } catch (err) {
      console.error(err); // Error handling
    }
  };

  const decreaseAmount =async  (item) => {
    if (item.quantity === 1) {
      deleteItem(item.id);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
      try {
        const responseData = await sendRequest(
          'http://localhost:500/yu', // Corrected URL endpoint
          'patch',
          JSON.stringify({
            ide:"add"
          }),
          { 'Content-Type': 'application/json' }
        );
     console.log("vjbbj");
      } catch (err) {
        console.error(err); // Error handling
      }
    }
  };

  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between bg-white border rounded-lg p-4 shadow-md space-y-4 md:space-y-0 md:space-x-6">
            <img className="w-32 h-32 object-cover rounded-lg" src={item.image} alt={item.name} />
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg"
                onClick={() => increaseAmount(item)}
              >
                +
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg"
                onClick={() => decreaseAmount(item)}
              >
                -
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-400 transition duration-300 ease-in-out shadow-lg"
                onClick={() =>deleteItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-400 transition duration-300 ease-in-out shadow-lg"
          onClick={clear}
        >
          CLEAR
        </button>
      </div>

      <div className="mt-12  p-6 rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold">Total Items: {totalItems}</p>
        <p className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Car;
