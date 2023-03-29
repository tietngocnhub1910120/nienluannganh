import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import CartItem from "../components/cart/cartItem";
import renderTotalPrice from "../utils/renderTotalPrice";
import { removeFromCart, updateCart } from "../Api/cartAPI";
const Cart = () => {
  const cart = useSelector((state) => state.user.cart);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch()
  const handleUpdateCart = async (productId, payload) => {
    await updateCart(dispatch, productId, payload)
  }
  const handleRemoveFromCart = async (productId, payload) => {
    await removeFromCart(dispatch, productId, payload)
  }

  useEffect(() => {
    if (cart?.products) {
      setAmount(renderTotalPrice(cart?.products));
    }
    else {
      setAmount(0)
    }
  }, [cart]);
  return (
    <div className="w-[80%] mx-auto">
      <div className="container mx-auto">
        <Header />
        <h1 className="font-semibold text-xl mt-8">GIỎ HÀNG CỦA BẠN</h1>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <ul className="col-span-2">
            {cart && cart?.products ? (
              cart?.products.map((product) => {
                return <CartItem key={product._id} product={product} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} />;
              })
            ) : (
              <p>Không có sản phẩm</p>
            )}
          </ul>
          <div className="col-span-1">
            <div className="p-4 bg-gray-300">
              <h2 className="font-semibold text-lg">TÓM TẮT ĐƠN HÀNG</h2>
              <p className="text-sm">Chưa bao gồm phí vận chuyển:</p>
              <div className="border-b border-gray-500 flex justify-between py-3">
                <span>Tổng tiền:</span>{" "}
                <span className="font-bold">
                  {amount?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <p className="mt-2 text-sm">
                Bạn có thể nhập mã giảm giá ở trang thanh toán
              </p>
              <Link to={"/cart/checkout"}>
                <button className="mt-3 w-full py-3 bg-primary text-white hover:bg-hover">
                  TIẾN HÀNH ĐẶT HÀNG
                </button>
              </Link>
              <Link to={"/products"}>
                <button className="mt-3 w-full py-3 bg-white text-primary">
                  MUA THÊM SẢN PHẨM
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
