import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import srcProduct2 from "../assets/upload_large.webp";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Category from "../components/Category";
const ProductDetail = () => {
  let { productId } = useParams();
  const [size, setSize] = useState("s");
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("red");
  const data = [srcProduct1, srcProduct2];
  const handleChooseSize = (event) => {
    setSize(event.target.value);
  };
  const handleChooseColor = (event) => {
    setColor(event.target.value);
  };
  const handleChooseImgae = (event) => {
    setIndex(event.target.dataset.index);
  };
  useEffect(() => {
    const slides = document.querySelectorAll(".slide-img");
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  });
  return (
    <div className="app__container my-8 pb-16">
      <div className="grid grid-cols-4">
        <Category />
        <div className="col-span-3">
          <div className="grid grid-cols-2">
            <div className="h-[400px]">
              <img src={data[index]} alt="" className="scale-90" />
              <div className="flex gap-4">
                <div
                  className="w-14 slide-img border hover:border-primary"
                  onClick={handleChooseImgae}
                >
                  <img src={srcProduct1} alt="" data-index={0} />
                </div>
                <div
                  className="w-14 slide-img border hover:border-primary"
                  onClick={handleChooseImgae}
                >
                  <img src={srcProduct2} alt="" data-index={1} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                Bàn Sofa Thời Trang Noguchi Home'furni
              </h4>
              <p className="text-base">SKU: SF022-1</p>
              <h5 className="text-red-400 text-2xl font-medium mt-2">
                1,200,000₫
              </h5>
              <div className="h-[1px] w-full bg-gray-300 my-2"></div>
              <div>
                <label htmlFor="size" className="block text-sm font-semibold">
                  Kích thước
                </label>
                <select
                  name="size"
                  value={size}
                  onChange={handleChooseSize}
                  className="p-2 border w-48 my-4 text-gray-700"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                </select>
              </div>
              <div>
                <label htmlFor="color" className="block text-sm font-semibold">
                  Kích thước
                </label>
                <select
                  name="color"
                  value={color}
                  onChange={handleChooseColor}
                  className="p-2 border w-48 my-4 text-gray-700"
                >
                  <option value="red">red</option>
                  <option value="white">white</option>
                </select>
              </div>
              <div>
                <label htmlFor="color" className="block text-sm font-semibold">
                  Số lượng
                </label>
                <input
                  type="number"
                  name="quantiy"
                  defaultValue={1}
                  min={1}
                  max={28}
                  className="p-2 w-16 border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
