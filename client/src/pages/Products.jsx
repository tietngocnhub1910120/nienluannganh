import ProductItem from "../components/ProductItem";
import Category from "../components/Category";
import { useState } from "react";

const Products = () => {
  const [dataSort, setDataSort] = useState("mới");

  const handleSortting = (event) => {
    setDataSort(event.target.value);
  };
  return (
    <div className="app__container mt-8">
      <div className="grid grid-cols-4">
        <Category />
        <div className="col-span-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium">TẤT CẢ SẢN PHẨM</h1>
            <div>
              <span className="text-sm">SẮP XẾP THEO:</span>
              <select
                name="value"
                value={dataSort}
                onChange={handleSortting}
                className="text-sm py-1 px-2"
              >
                <option value="tăng">Tăng dần</option>
                <option value="giảm">Giảm dần</option>
                <option value="a-z">Từ A-Z</option>
                <option value="z-a">Từ Z-A</option>
                <option value="mới">Mới nhất</option>
                <option value="cũ">Cũ nhất</option>
                <option value="bán chạy">Bán chạy nhất</option>
              </select>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-3">
            <ProductItem />
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
  );
};

export default Products;
