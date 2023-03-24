import SliderComponent from "../components/Slider";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../Api/productAPI";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProduct(dispatch, { pageItem: 4 });
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto">
          <Header activeHeader="home" />
          <SliderComponent />
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
