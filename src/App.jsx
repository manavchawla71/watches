import { useState } from "react";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
