import { Link } from "react-router-dom";
import errorImage from "../assets/placeholder.webp";
import { MdBookmark, MdAddShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { addBookmark, unBookmark } from "../Api/authAPI";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ProductItem = (props) => {
  const { data, savedProduct } = props;
  const [activeBookmark, setActiveBookmark] = useState(false);
  const dispatch = useDispatch();
  const handleSaveProduct = async (productId) => {
    if (!activeBookmark) {
      const { success } = await addBookmark(productId, dispatch);
      success && setActiveBookmark(!activeBookmark);
    } else {
      const { success } = await unBookmark(productId, dispatch);
      success && setActiveBookmark(!activeBookmark);
    }
  };
  useEffect(() => {
    setActiveBookmark(savedProduct ? true : false);
  }, [data, savedProduct]);
  return (
    <div className="flex flex-col text-center group relative overflow-hidden">
      <div className="flex">
        {data?.urlImages
          ? data?.urlImages.map((url, index) => {
            const ratio = (1 / 3) * 100;
            if (index < 2) {
              return (
                <img
                  key={index}
                  src={url}
                  alt=""
                  className={`-ml-[${ratio}%] h-[380px] object-cover ease-linear duration-300 group-hover:-ml-[50%]`}
                  onError={(e) => {
                    e.target.src = errorImage;
                  }}
                />
              );
            }
          })
          : null}
      </div>

      <div className="flex justify-center gap-2 absolute top-2/3 ease-linear duration-300 left-full group-hover:left-[40%]">
        <button
          onClick={() => {
            handleSaveProduct(data?._id);
          }}
          className={`text-lg p-1 border ease-linear duration-300 origin-center border-rgb(0,0,0,0.25) hover:bg-primary hover:text-white ${activeBookmark && "bg-primary text-white"
            }`}
        >
          <MdBookmark />
        </button>
        <Link to={`/products/${data?._id}`}>
          <button className="text-lg p-1 border ease-linear duration-300 origin-center border-rgb(0,0,0,0.25) hover:bg-primary hover:text-white">
            <MdRemoveRedEye />
          </button>
        </Link>
      </div>
      <span className="text-base hover:text-primary ease-linear duration-300 mt-3 cursor-pointer">
        {data?.title}
      </span>
      <span className="text-red-400">
        {data?.price?.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </span>
    </div>
  );
};

export default ProductItem;
