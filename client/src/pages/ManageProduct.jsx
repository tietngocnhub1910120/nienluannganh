import { useEffect } from "react";
import { MdSearch } from "react-icons/md";
import avatar from "../assets/avatar.jpg";
import NavAdmin from "../components/NavAdmin";
import ProductTable from "../components/ProductTable";
import TopPane from "../components/TopPane";
import { getAllProduct } from "../Api/productAPI";
import { useDispatch } from "react-redux";

const ManageProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      await getAllProduct(dispatch);
    };
    fetchProductList();
  }, []);
  return (
    <div className="container mx-auto mt-24 shadow-xl">
      <div className="flex">
        <div className="w-[25%] min-h-[80vh] ">
          <NavAdmin navActive={"products"} />
        </div>
        <div className="flex-1 h-full">
          <TopPane />

          <div className="w-full h-full">
            <div className="rounded-lg border border-gray-200 shadow-md mx-2 mt-16 h-full max-h-[600px] overflow-y-auto">
              {<ProductTable />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
