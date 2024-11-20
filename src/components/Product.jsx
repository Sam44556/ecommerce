import React, { useState } from "react";
import { useProvider } from "../context/provider";
import { NavLink } from "react-router-dom";

function Product() {
  const { products } = useProvider(); // Assuming 'Product' has categories like 'Men', 'Female', 'Electronics'
  
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All" 
    ? products
    :products.filter(e => e.type=== selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Selection Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 m-2 ${selectedCategory === "All" ? "bg-yellow-500" : "bg-gray-300"} text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 m-2 ${selectedCategory === "men" ? "bg-yellow-500" : "bg-gray-300"} text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out`}
          onClick={() => setSelectedCategory("men")}
        >
          Men
        </button>
        <button
          className={`px-4 py-2 m-2 ${selectedCategory === "female" ? "bg-yellow-500" : "bg-gray-300"} text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out`}
          onClick={() => setSelectedCategory("female")}
        >
          Female
        </button>
        <button
          className={`px-4 py-2 m-2 ${selectedCategory === "electronics" ? "bg-yellow-500" : "bg-gray-300"} text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out`}
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((e) => (
          <div key={e.id} className="bg-white rounded-lg shadow-lg w-auto overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src={e.image}
                alt={e.name}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">{e.name}</h3>

              <NavLink to={`/product/${e.id}`}>
                <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg">
                  Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
