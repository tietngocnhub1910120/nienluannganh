import { Link } from 'react-router-dom'
import { EditIcon, ViewIcon, } from "@chakra-ui/icons";
import {
    useDisclosure,
    Td,
    Tr,
} from "@chakra-ui/react";
import InstanceModal from "../modal/InstanceModal";
import VerifyModal from "../modal/VerifyModal";
import UpdateStatusOrder from "../modal/updateStatusOrder";
import { renderStatusOrder } from "../../utils/renderStatusOrder";

function OrderRow(props) {
    const { order, updateStatus } = props;
    const {
        isOpen: isOpenEdit,
        onOpen: onOpenEdit,
        onClose: onCloseEdit,
    } = useDisclosure();
    return (
        <Tr className="hover:bg-gray-50">
            <Td >
                <h3 className="font-bold truncate">
                    {order.orderCode}
                </h3>
            </Td>
            <Td>
                <p>{order?.userId.email}</p>
            </Td>
            <Td>
                <p className="w-28 truncate" title={order.address}>{order.address}</p>
            </Td>
            <Td>{order.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "VND",
            })}</Td>
            <Td>
                {renderStatusOrder(order.status)}
            </Td>
            <Td>
                <div className="flex gap-4">
                    <Link to={`/tracking-order/${order._id}`}>
                        <ViewIcon
                            boxSize={5}
                            className="cursor-pointer"
                        />
                    </Link>
                    {order.status !== 'Đã hủy' && <EditIcon
                        boxSize={5}
                        color={'green.400'}
                        onClick={onOpenEdit}
                        className="cursor-pointer"
                    />}
                </div>
                {/* <InstanceModal
                show={isOpenVerify}
                hide={onCloseVerify}
                modalName={"Xác Nhận"}
                content={
                    <VerifyModal
                        handleVerify={handleCancelOrder}
                        hide={onCloseVerify}
                        title={"Xóa Đơn hàng này?"}
                        selectedId={order._id}
                    />
                }
            /> */}
                <InstanceModal
                    show={isOpenEdit}
                    hide={onCloseEdit}
                    modalName={"Cập nhật trạng thái đơn hàng"}
                    content={
                        <UpdateStatusOrder
                            handleEdit={updateStatus}
                            hide={onCloseEdit}
                            selectedId={order._id}
                            oldStatus={order.status}
                        />
                    }
                />
            </Td>

        </Tr>);
}

export default OrderRow;