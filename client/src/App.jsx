import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UnAuthorized from "./pages/UnAuthorized";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import TrackingOrder from "./pages/TrackingOrder";
import ProductDetail from "./pages/ProductDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Purchase from "./pages/Purchase";
import ManageOrder from "./pages/ManageOrder";
import ManageReview from "./pages/ManageReview";
import ManageProduct from "./pages/ManageProduct";
import AddProduct from "./pages/AddProduct";
import RequireAuth from "./utils/RequireAuth";
import AdminRoutes from "./utils/AdminPermission";
import Bookmarks from "./pages/Bookmarks";
const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/cart/checkout" element={<Checkout />}></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
          <Route path="/user/purchase" element={<Purchase />}></Route>
          <Route path="/user/bookmark" element={<Bookmarks />}></Route>
          <Route path="/tracking-order/:orderId" element={<TrackingOrder />}></Route>
          <Route element={<AdminRoutes />}>
            <Route path="/manage" element={<Home />}></Route>
            <Route path="/manage/order" element={<ManageOrder />}></Route>
            <Route path="/manage/product" element={<ManageProduct />}></Route>
            <Route path="/manage/review" element={<ManageReview />}></Route>
            <Route path="/manage/product/add" element={<AddProduct />}></Route>
          </Route>
          <Route path="/unauthorized" element={<UnAuthorized />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
