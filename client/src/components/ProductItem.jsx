import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import srcProduct2 from "../assets/upload_large.webp";
import { MdBookmark, MdAddShoppingCart, MdRemoveRedEye } from "react-icons/md";
const ProductItem = () => {
  return (
    <div className="flex flex-col text-center group relative overflow-hidden ">
      <div className="flex">
        <img
          src={srcProduct1}
          alt=""
          className="-ml-[300px] ease-linear duration-300 group-hover:ml-0"
        />
        <img
          src={srcProduct2}
          alt=""
          className="ease-linear duration-300 group-hover:scale-0"
        />
      </div>
      <div className="flex gap-2 absolute top-2/3 ease-linear duration-300 left-full group-hover:left-1/3">
        <button className="text-lg p-1 border ease-linear duration-300 origin-center border-rgb(0,0,0,0.25) hover:bg-primary hover:text-white">
          <MdAddShoppingCart />
        </button>
        <button className="text-lg p-1 border ease-linear duration-300 origin-center border-rgb(0,0,0,0.25) hover:bg-primary hover:text-white">
          <MdBookmark />
        </button>
        <button className="text-lg p-1 border ease-linear duration-300 origin-center border-rgb(0,0,0,0.25) hover:bg-primary hover:text-white">
          <MdRemoveRedEye />
        </button>
      </div>
      <span className="text-base hover:text-primary ease-linear duration-300 mt-3 cursor-pointer">
        Bàn sofa thời trang Noguchi Home'furni
      </span>
      <span className="text-red-400">1,200,000$</span>
    </div>
  );
};

export default ProductItem;
