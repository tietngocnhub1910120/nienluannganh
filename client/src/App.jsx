import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import TrackingOrder from "./pages/TrackingOrder";
import ProductDetail from "./pages/ProductDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Purchase from "./pages/Purchase";
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
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/purchase" element={<Purchase />}></Route>
        <Route path="/tracking-order" element={<TrackingOrder />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
