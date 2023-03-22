import { useEffect, useState } from "react";
import { getAllProduct } from "../Api/productAPI";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Category from "../components/Category";
import Header from "../components/Header";
import renderSavedProduct from "../utils/renderSavedProduct";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.auth.user);

  const handleSortting = (event) => {
    setFilters({ ...filters, date: event.target.value });
  };
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    date: "desc",
  });
  useEffect(() => {
    const fetchProducts = async (params) => {
      await getAllProduct(dispatch, params);
    };
    fetchProducts(filters);
  }, [filters]);
  console.log(filters);
  return (
    <div className="w-[80%] mx-auto">
      <div className="container mx-auto">
        <Header />
        <div className="grid grid-cols-4 mt-8">
          <Category />
          <div className="col-span-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-medium">TẤT CẢ SẢN PHẨM</h1>
              <div>
                <span className="text-sm">SẮP XẾP THEO:</span>
                <select
                  name="date"
                  value={filters.date}
                  onChange={handleSortting}
                  className="text-sm py-1 px-2"
                >
                  <option value="desc">Mới nhất</option>
                  <option value="asc">Cũ nhất</option>
                </select>
              </div>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-8">
              {products && products.length > 0 ? (
                products.map((product) => {
                  return (
                    <ProductItem
                      key={product._id}
                      data={product}
                      savedProduct={renderSavedProduct(user, product._id)}
                    />
                  );
                })
              ) : (
                <p>Không có sản phẩm</p>
              )}
            </div>
            <div className="mt-7 flex justify-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
