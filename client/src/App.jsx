import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
  return (
    <div className="app w-full">
      <div className="app__container">
        <Header />
      </div>
      <Routes>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
