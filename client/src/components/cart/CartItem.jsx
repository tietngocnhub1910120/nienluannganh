import { useState } from "react";
import { MdDelete } from "react-icons/md";
const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = (count) => {
    if (quantity === 1 && count === -1) return;
    setQuantity(quantity + count);
  };
  return (
    <li className="pb-6 border-b grid grid-cols-5 items-center">
      <figure className="w-24">
        <img src={product?.productId?.urlImages[0]} alt="" />
      </figure>
      <div className="col-span-2">
        <span>{product?.productId.title}</span>
        <MdDelete className="block bg-gray-300 p-1 rounded-sm text-3xl cursor-pointer text-gray-900" />
      </div>
      <div>
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
          value={product?.quantity}
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
      <span>
        {product?.productId.price?.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </span>
    </li>
  );
};

export default CartItem;
