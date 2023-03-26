import ProductItem from "../ProductItem";
import banner from "../../assets/mpvc.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import renderSavedProduct from "../../utils/renderSavedProduct";
const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="py-10">
      <h5 className="text-base font-light text-center">WHAT HOT</h5>
      <h1 className="text-center font-bold text-2xl">SẢN PHẨM MỚI</h1>
      <div className="grid grid-cols-4 gap-y-8 mt-8">
        {products && products.length > 0
          ? products.map((product) => {
              return (
                <ProductItem
                  key={product._id}
                  data={product}
                  savedProduct={renderSavedProduct(user, product._id)}
                />
              );
            })
          : null}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Link to={"/products"}>
          <button className="drop-shadow-lg text-lg text-center px-4 py-2 rounded bg-white hover:text-white duration-300 ease-linear hover:bg-primary">
            XEM THÊM
          </button>
        </Link>
      </div>
      <div className="mt-8 relative">
        <img src={banner} alt="" className="w-full bg-cover " />
        <div className="text-center drop-shadow-2xl absolute top-5 left-1/3">
          <h3 className="text-3xl drop-shadow-2xl font-bold">
            Miễn phí vận chuyển
          </h3>
          <span>
            Miễn phí 2 ngày vận chuyển với đơn hàng trên 500k trừ trực tiếp khi
            thanh toán
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
