import NavAdmin from "../components/NavAdmin";
import OrderTable from "../components/Manage/OrderTable";
import TopPane from "../components/TopPane";
import { useDispatch } from "react-redux";
import { getAllOrder } from "../Api/orderAPI";
import { useEffect } from "react";
const ManageOrder = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrderList = async () => {
      await getAllOrder(dispatch);
    };
    fetchOrderList();
  }, []);
  return (
    <div className="xl:container mx-auto mt-24 shadow-xl">
      <div className="flex">
        <div className="w-[25%] min-h-[80vh] ">
          <NavAdmin navActive={"orders"} />
        </div>
        <div className="flex-1">
          <TopPane tab='order' />
          <div className="w-full h-full">
            <div className="rounded-lg border border-gray-200 shadow-md mx-2 mt-16 h-full max-h-[600px] overflow-y-auto">
              {<OrderTable />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
