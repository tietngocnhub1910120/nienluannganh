import NavAdmin from "../components/NavAdmin";
import OrderRow from "../components/OrderRow";
import { MdSearch } from "react-icons/md";
import avatar from "../assets/avatar.jpg";
const ManageOrder = () => {
  return (
    <div className="xl:container mx-auto mt-24 shadow-xl">
      <div className="flex">
        <div className="w-[25%] min-h-[80vh] ">
          <NavAdmin navActive={"orders"} />
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
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mx-2 mt-16">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Mã đơn hàng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Người đặt hàng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Trạng thái đơn hàng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Danh sách sản phẩm
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Tổng tiền
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <OrderRow />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
