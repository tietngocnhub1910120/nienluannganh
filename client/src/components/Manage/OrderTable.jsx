import {
  Tbody,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import OrderRow from "./OrderRow";
import { cancelOrder, updateStatusOrder } from "../../Api/orderAPI";
const ProductTable = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  // const {
  //   isOpen: isOpenVerify,
  //   onOpen: onOpenVerify,
  //   onClose: onCloseVerify,
  // } = useDisclosure();
  // const handleCancelOrder = async (check, id) => {
  //   if (check) {
  //     await cancelOrder(dispatch, id);
  //   }
  // };


  const updateStatus = async (check, orderId, newStatus) => {
    if (check) {
      await updateStatusOrder(dispatch, orderId, { newStatus })
    }
  }
  return (
    <>
      <TableContainer>
        <Table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <Thead className="bg-gray-50">
            <Tr>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Mã đơn hàng
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Khách hàng
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Địa chỉ
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Tổng tiền
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Trạng thái
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Tùy chọn
              </Th>
            </Tr>
          </Thead>
          <Tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {orders &&
              orders.map((order) => {
                return (
                  <OrderRow key={order._id} order={order} updateStatus={updateStatus} />
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;
