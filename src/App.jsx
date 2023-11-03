import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route
            path="/digital"
            element={<Navigate replace to="/products" />}
          />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
