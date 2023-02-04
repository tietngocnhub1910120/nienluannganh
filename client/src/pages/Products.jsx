import { MdOutlineArrowDropDown } from "react-icons/md";
import ProductItem from "../components/ProductItem";
const Products = () => {
  return (
    <div className="app__container mt-8">
      <div className="grid grid-cols-4">
        <div>
          <h2 className="text-base font-semibold">DANH MỤC</h2>
          <ul className="ml-6">
            <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
              <span className="text-sm">NỘI THẤT PHÒNG KHÁCH</span>
              <MdOutlineArrowDropDown />
            </li>
            <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
              <span className="text-sm ">NỘI THẤT PHÒNG KHÁCH</span>
              <MdOutlineArrowDropDown />
            </li>
            <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
              <span className="text-sm ">NỘI THẤT PHÒNG KHÁCH</span>
              <MdOutlineArrowDropDown />
            </li>
            <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
              <span className="text-sm ">NỘI THẤT PHÒNG KHÁCH</span>
            </li>
            <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
              <span className="text-sm">NỘI THẤT PHÒNG KHÁCH</span>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium">TẤT CẢ SẢN PHẨM</h1>
            <div>
              <span className="text-sm">SẮP XẾP THEO:</span>
              <select name="value" id="value" className="text-sm py-1 px-2">
                <option value="tăng">Tăng dần</option>
                <option value="giảm">Giảm dần</option>
                <option value="a-z">Từ A-Z</option>
                <option value="z-a">Từ Z-A</option>
                <option value="mới" selected>
                  Mới nhất
                </option>
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
              <ul class="inline-flex -space-x-px">
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
