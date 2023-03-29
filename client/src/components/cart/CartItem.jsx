import { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
const CartItem = ({ product, handleUpdateCart, handleRemoveFromCart }) => {
  const handleIncrement = (stringValue, numberValue) => {
    handleUpdateCart(product?.productId._id, { quantity: numberValue, color: product.color })
  };
  const handleRemove = (id, payload) => {
    handleRemoveFromCart(id, payload)
  }
  return (
    <li className="pb-6 border-b grid grid-cols-6 items-center">
      <figure className="w-24">
        <img src={product?.productId?.urlImages[0]} alt="" />
      </figure>
      <div className="col-span-2">
        <span>{product?.productId.title}</span>
        <span onClick={() => { handleRemove(product?.productId._id, product.color) }}>
          <MdDelete className="block bg-gray-300 p-1 rounded-sm text-3xl cursor-pointer text-gray-900" />
        </span>
      </div>
      <div>
        <NumberInput
          mt={"3"}
          onChange={handleIncrement}
          size="md"
          maxW={16}
          defaultValue={product.quantity}
          min={1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </div>
      <span>
        Màu sắc : {product.color}
      </span>
      <span>
        {Number(product?.productId.price * product.quantity).toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </span>
    </li>
  );
};

export default CartItem;
