import { MdSearch } from "react-icons/md";
import avatar from "../assets/avatar.jpg";
import NavAdmin from "../components/NavAdmin";
import FormProduct from "../components/FormProduct";
const AddProduct = () => {
  return (
    <div className="xl:container mx-auto mt-24 shadow-xl">
      <div className="flex">
        <div className="w-[25%] min-h-[80vh] ">
          <NavAdmin navActive={"add"} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between p-2">
            <div className="flex items-center  px-4 py-3 gap-2 rounded  w-[320px] border border-primary">
              <MdSearch className="text-2xl text-gray-500" />
              <input
                type="text"
                placeholder="Tìm kiếm...."
                className="outline-none bg-transparent w-full"
              />
            </div>
            <div className="flex items-center">
              <span className="mr-4 font-medium">Admin</span>
              <figure className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </figure>
            </div>
          </div>
          <div className="w-full">
            <FormProduct isEdit={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
