import srcItem1 from "../assets/slideshow_1.webp";
import srcItem2 from "../assets/slideshow_2.webp";
import srcItem3 from "../assets/slideshow_3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const SliderComponent = () => {
  const [data, SetData] = useState([
    {
      src: srcItem1,
      subTitle: "Tinh tế sang trọng",
      title: "BỘ SALON TRẮNG XÁM XEM NGAY",
    },
    {
      src: srcItem2,
      subTitle: "Tinh tế sang trọng",
      title: "BỘ SALON TRẮNG XÁM XEM NGAY",
    },
    {
      src: srcItem3,
      subTitle: "Tinh tế sang trọng",
      title: "BỘ SALON TRẮNG XÁM XEM NGAY",
    },
  ]);
  const slideList = data.map((item, index) => (
    <div key={index} className="text-white text-center min-h-[560px] relative">
      <img
        src={item.src}
        className="absolute -z-10 bg-cover bg-no-repeat bg-center w-full"
        alt=""
      />
      <div className="flex flex-col justify-center items-center mt-[10%] gap-6">
        <h2 className="text-3xl font-semibold">{item.subTitle}</h2>
        <h3 className="text-5xl font-bold">{item.title}</h3>
        <Link to={"/products"}>
          <span className="px-3 py-2 rounded-md bg-primary">Xem Ngay</span>
        </Link>
      </div>
    </div>
  ));
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="w-full overflow-hidden mt-8">
      <Slider {...settings} children={slideList}></Slider>
    </div>
  );
};

export default SliderComponent;
