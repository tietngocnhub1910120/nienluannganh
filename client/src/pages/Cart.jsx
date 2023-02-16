import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleReduced = () => {
    setQuantity(quantity - 1);
  };
  return (
    <section className="app__container">
      <h1 className="font-semibold text-xl mt-8">GIỎ HÀNG CỦA BẠN</h1>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <ul className="col-span-2">
          <li className="pb-6 border-b grid grid-cols-5 items-center">
            <figure className="w-24">
              <img src={srcProduct1} alt="anh" />
            </figure>
            <div className="col-span-2">
              <span>Bàn Sofa Thời Trang Noguchi Home'furni</span>
              <MdDelete className="block bg-gray-300 p-1 rounded-sm text-3xl cursor-pointer text-gray-900" />
            </div>
            <div>
              <span className="text-lg cursor-pointer" onClick={handleReduced}>
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
                onClick={handleIncrement}
              >
                +
              </span>
            </div>
            <span>222,000 $</span>
          </li>
        </ul>
        <div className="col-span-1">
          <div className="p-4 bg-gray-300">
            <h2 className="font-semibold text-lg">TÓM TẮT ĐƠN HÀNG</h2>
            <p className="text-sm">Chưa bao gồm phí vận chuyển:</p>
            <div className="border-b border-gray-500 flex justify-between py-3">
              <span>Tổng tiền:</span>{" "}
              <span className="font-bold">444,000₫</span>
            </div>
            <p className="mt-2 text-sm">
              Bạn có thể nhập mã giảm giá ở trang thanh toán
            </p>
            <Link to={"/cart/checkout"}>
              <button className="mt-3 w-full py-3 bg-primary text-white hover:bg-hover">
                TIẾN HÀNH ĐẶT HÀNG
              </button>
            </Link>

            <button className="mt-3 w-full py-3 bg-white text-primary">
              MUA THÊM SẢN PHẨM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
