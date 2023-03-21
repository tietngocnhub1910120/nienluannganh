import SliderComponent from "../components/Slider";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto">
          <Header />
          <SliderComponent />
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
