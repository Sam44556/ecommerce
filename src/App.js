

import { Routes, Route } from "react-router-dom";
import { Provider } from './context/provider';
import About from "./components/About";
import Signup from "./components/acc/Signup";
import Login from "./components/acc/Login";
import Account from "./components/acc/Account";
import Home from "./components/home";
import Car from "./components/Cart";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Navbar from "./components/navbar";
import SingleProduct from "./components/singleproduct";
import Foot from "./components/footer";
export default function App() {

  return (
    <div className=" text-white">
      <Provider>
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route
          path="/product/:id"
          element={
            <SingleProduct  />
          }
        />
        <Route
          path="/cart"
          element={
            <Car
            
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Provider>
      <footer className="text-center">
       
        <Foot />
      </footer>
    </div>
  );
}
