import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { MdShoppingCart, MdDone, MdMoreHoriz } from "react-icons/md";
import avatar from "../assets/profile.jpg";
import ProductItem from "../components/ProductItem";
import CommentForm from "../components/ProductDetail/CommentForm";
import Header from "../components/Header";
import { getProduct } from "../Api/productAPI";
import { addToCart } from "../Api/cartAPI";
const ProductDetail = () => {
  let { productId } = useParams();
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [option, setOption] = useState(false);
  const [imageActive, setImageActive] = useState(null);
  const [infoProduct, setInfoProduct] = useState({
    color: "",
    quantity: 1,
  });
  const handleChooseColor = (event) => {
    setInfoProduct({ ...infoProduct, color: event.target.value });
  };
  const handleChangeQuantity = (string, number) => {
    setInfoProduct({ ...infoProduct, quantity: number });
  };
  const handleAddCart = async (productId) => {
    console.log(productId, infoProduct);
    await addToCart(dispatch, productId, infoProduct);
  };
  useEffect(() => {
    const fetchProduct = async (id) => {
      await getProduct(id, dispatch);
    };
    fetchProduct(productId);
  }, [productId]);
  useEffect(() => {
    setImageActive(() => {
      if (product.urlImages && product.urlImages.length > 0) {
        return product.urlImages[0];
      } else {
        return " ";
      }
    });
    setInfoProduct(() => {
      if (product.colors && product.colors.length > 0) {
        return { ...infoProduct, color: product.colors[0] };
      } else {
        return { ...infoProduct, color: "" };
      }
    });
  }, [product]);
  console.log(infoProduct);
  return (
    <div className="w-[80%] mx-auto">
      <div className="container mx-auto">
        <Header />
        <section className="grid grid-cols-4 py-8">
          <div className="col-span-4 ">
            <div className="grid grid-cols-2 ">
              <div>
                <figure>
                  <img src={imageActive} alt="" className="scale-90" />
                </figure>
                <div className="flex gap-4">
                  {product.urlImages && product.urlImages.length > 0
                    ? product.urlImages.map((imageSrc, index) => {
                        return (
                          <div
                            key={index}
                            className={`w-14 slide-img border hover:border-primary ${
                              imageActive === imageSrc ? "active" : ""
                            }`}
                            onClick={() => {
                              setImageActive(imageSrc);
                            }}
                          >
                            <figure>
                              <img src={imageSrc} alt="" />
                            </figure>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-xl">{product.title}</h1>
                <p className="text-base">SKU : {product.sku}</p>
                <h5 className="text-red-400 text-2xl font-medium mt-2">
                  {product.price?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h5>
                <div className="h-[1px] w-full bg-gray-300 my-2"></div>
                <div>
                  <label
                    htmlFor="color"
                    className="block text-sm font-semibold"
                  >
                    Kích thước
                  </label>
                  <select
                    name="color"
                    value={infoProduct.color}
                    onChange={handleChooseColor}
                    className="p-2 border w-48 my-4 text-gray-700"
                  >
                    {product && product?.colors?.length
                      ? product?.colors?.map((color, index) => {
                          return (
                            <option key={`c${index}`} value={color}>
                              {color}
                            </option>
                          );
                        })
                      : null}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="color"
                    className="block text-sm font-semibold"
                  >
                    Số lượng
                  </label>

                  <NumberInput
                    mt={"3"}
                    onChange={handleChangeQuantity}
                    size="md"
                    maxW={16}
                    defaultValue={infoProduct.quantity}
                    min={1}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="flex gap-4 mb-11">
                  <div
                    onClick={() => {
                      handleAddCart(productId);
                    }}
                    className="flex items-center bg-primary text-white w-full px-4 py-2 gap-2 cursor-pointer hover:bg-hover"
                  >
                    <MdShoppingCart className="text-2xl" />
                    <span>Thêm vào giỏ</span>
                  </div>
                  <div className="flex items-center bg-primary text-white w-full px-4 py-2 gap-2 cursor-pointer hover:bg-hover">
                    <MdDone className="text-2xl" />
                    <span>Mua ngay</span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">
                    Tags:
                    <span className="text-gray-500 text-sm font-normal bg-gray-200 p-1 rounded-sm ml-2">
                      {product.type}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <section className="mt-20">
              <h2 className="font-medium">MÔ TẢ SẢN PHẨM</h2>
              <div className="h-[1px] w-full bg-black my-2"></div>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </section>
            <section className="mt-11">
              <h2 className="font-semibold">BÌNH LUẬN</h2>
              <div className="h-[1px] w-full bg-black my-2"></div>
              <CommentForm />
              <ul className="mx-8 mt-8">
                <li className="mt-4 p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <figure className="w-8 h-8 rounded-full overflow-hidden">
                        <img src={avatar} alt="avatar" />
                      </figure>
                      <span className="text-sm text-gray-500 font-medium">
                        Michael Gough
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        Feb. 8, 2022
                      </span>
                    </div>
                    <span className="relative p-1 rounded-md cursor-pointer hover:bg-gray-200">
                      <MdMoreHoriz
                        className="text-2xl text-gray-400"
                        onClick={() => {
                          setOption(!option);
                        }}
                      />
                      {option ? (
                        <ul className="absolute top-10 left-0 bg-white shadow-md ">
                          <li className="p-2">Edit</li>
                          <li className="p-2">Remove</li>
                        </ul>
                      ) : null}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-500 text-justify">
                    Very straight-to-point article. Really worth time reading.
                    Thank you! But tools are just the instruments for the UX
                    designers. The knowledge of the design tools are as
                    important as the creation of the design strategy.
                  </p>
                </li>
              </ul>
            </section>
            <section className="mt-11">
              <h4 className="font-medium">SẢN PHẨM KHÁC</h4>
              <div className="h-[1px] w-full bg-black my-2"></div>
              <ul className="grid grid-cols-4">
                <li>
                  <ProductItem />
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
