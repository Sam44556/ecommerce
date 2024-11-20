import React, { createContext, useState, useEffect, useContext } from "react";
import Products from "../components/catagories"; // Make sure Products is an array of product objects

const Contextp = createContext();

function Provider({ children }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]); // Renamed for consistency
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // State for logged-in user
  const [userId, setUserId] = useState(""); // Renamed `ui` to `userId` for clarity

  function addItemToCart(item) {
    if (user) {
      setCartItems([...cartItems, item]);
    } else {
      alert("Please log in to add items to your cart.");
    }
  }

  function deleteItem(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function login(username) {
    setUser({ name: username }); // Set user object with name
  }

  function updateUserId(id) {
    setUserId(id);
  }

  function logout() {
    setUser(null);
    setUserId(null); // Clear userId on logout
    setCartItems([]); // Optionally clear cart on logout
  }

  useEffect(() => {
    // Function to filter products based on the query
    const filterProducts = () => {
      if (!query) {
        setProducts(Products); // If no query, show all products
        return;
      }

      const lowerCaseQuery = query.toLowerCase();
      const filtered = Products.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseQuery)
      );
      setProducts(filtered);
    };

    filterProducts();
  }, [query]);

  return (
    <Contextp.Provider
      value={{
        products,
        cartItems,
        setCartItems,
        addItemToCart,
        deleteItem,
        query,
        setQuery,
        user,
        login,
        logout,
        userId,
        updateUserId,
      }}
    >
      {children}
    </Contextp.Provider>
  );
}

function useProvider() {
  const context = useContext(Contextp);
  if (context === undefined) {
    throw new Error("useProvider must be used within a Provider");
  }
  return context;
}

export { Contextp, Provider, useProvider };
