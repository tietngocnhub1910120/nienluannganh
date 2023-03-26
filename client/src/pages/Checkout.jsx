import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import FormCheckout from "../components/Form/CheckoutForm";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = (count) => {
    if (quantity === 1 && count === -1) return;
    setQuantity(quantity + count);
  };
  return (
    <div className="w-[80%] mx-auto">
      <div className="container mx-auto">
        <Header />
        <section className="grid grid-cols-7 gap-4 mt-8">
          <div className="col-span-4">
            <FormCheckout />
          </div>
          <div className="col-span-3">
            <ul>
              <li className="pb-6 border-b grid grid-cols-5 items-center">
                <figure className="w-24">
                  <img src={srcProduct1} alt="anh" />
                </figure>
                <div className="col-span-2">
                  <span>Bàn Sofa Thời Trang Noguchi Home'furni</span>
                  <MdDelete className="block bg-gray-300 p-1 rounded-sm text-3xl cursor-pointer text-gray-900" />
                </div>
                <div className="flex">
                  <span
                    className="text-lg cursor-pointer"
                    onClick={() => {
                      handleIncrement(-1);
                    }}
                  >
                    -
                  </span>
                  <input
                    className="w-10 bg-gray-300 text-center mx-2 outline-none"
                    type="text"
                    name="quantity"
                    value={quantity}
                    readOnly
                  />
                  <span
                    className="text-lg cursor-pointer"
                    onClick={() => {
                      handleIncrement(1);
                    }}
                  >
                    +
                  </span>
                </div>
                <span>222,000 $</span>
              </li>
            </ul>
            <div className="flex justify-between gap-3 mt-6">
              <input
                className="py-3 px-2 w-2/3 outline-[#b49149] "
                type="text"
                name="code"
                placeholder="Mã giảm giá"
              />
              <button className="w-1/3 py-3 px-6 bg-gray-800 text-white rounded-md cursor-pointer duration-300 ease-linear hover:bg-primary">
                Sử dụng
              </button>
            </div>
            <div className="h-[1px] w-full bg-gray-500 my-8"></div>
            <p className="flex justify-between items-center">
              Phí vận chuyển
              <span className="text-right">35,000 đ</span>
            </p>
            <div className="h-[1px] w-full bg-gray-500 my-8"></div>
            <p className="flex justify-between items-center">
              Tổng cộng
              <span>
                VND <span className="text-2xl">257,000 đ</span>
              </span>
            </p>
            <button className="w-full mt-8 py-4 bg-gray-800 rounded-md text-white hover:bg-primary">
              Hoàn tất đơn hàng
            </button>
          </div>
          <Link to={"/cart"}>
            <button className="text-white px-3 py-2 bg-gray-800 rounded hover:bg-primary">
              Giỏ hàng
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
