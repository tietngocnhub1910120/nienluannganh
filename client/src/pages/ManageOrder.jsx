import NavAdmin from "../components/NavAdmin";
import OrderRow from "../components/OrderRow";
import TopPane from "../components/TopPane";
const ManageOrder = () => {
  return (
    <div className="xl:container mx-auto mt-24 shadow-xl">
      <div className="flex">
        <div className="w-[25%] min-h-[80vh] ">
          <NavAdmin navActive={"orders"} />
        </div>
        <div className="flex-1">
          <TopPane />
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
