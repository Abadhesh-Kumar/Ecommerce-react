import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/index.js";
import Contact from "./components/contact.js";
import Shop from "./components/shop.js";
import Shop_details from "./components/shop-detail.js";
import Cart from "./components/cart.js";
import Checkout from "./components/chackout.js";
import Testimonial from "./components/testimonial.js";
import Page_404 from "./components/page_404.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<Shop_details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/404" element={<Page_404 />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
