import { useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
    useDisclosure,
    Tbody,
    Td,
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon } from '@chakra-ui/icons'
import InstanceModal from "../modal/InstanceModal";
import VerifyModal from "../modal/VerifyModal";
import { removeReview } from "../../Api/reviewAPI";
const ReviewTable = () => {
    const { reviews } = useSelector((state) => state.product);
    const [reviewId, setReviewId] = useState(null);
    const dispatch = useDispatch();

    const starts = [
        { number: 1, sub: 'Rất tệ' },
        { number: 2, sub: 'Tệ' },
        { number: 3, sub: 'Trung bình' },
        { number: 4, sub: 'Tốt' },
        { number: 5, sub: 'Rất tốt' },
    ]

    const {
        isOpen: isOpenVerify,
        onOpen: onOpenVerify,
        onClose: onCloseVerify,
    } = useDisclosure();
    const handleRemoveReview = async (check) => {
        if (check) {
            await removeReview(dispatch, reviewId);
        }
    };
    return (
        <>
            <TableContainer>
                <Table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <Thead className="bg-gray-50">
                        <Tr>
                            <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Sản phẩm
                            </Th>
                            <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Người đánh giá
                            </Th>
                            <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Nội dung
                            </Th>
                            <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Số sao
                            </Th>
                            <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Tùy chọn
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {reviews &&
                            [...reviews].map((review) => {
                                return (
                                    <Tr className="hover:bg-gray-50" key={review._id}>
                                        <Td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                            <h3 className="font-bold truncate w-40">
                                                {review.productId.title}
                                            </h3>
                                        </Td>
                                        <Td>
                                            <div className="flex items-center gap-2">
                                                <img src={review.userId.avatar} alt="" className="w-8 h-8 object-cover rounded-full" />
                                                <div>
                                                    <p className="font-bold text-black">{review.userId.username}</p>
                                                    <p>{review.userId.email}</p>
                                                </div>
                                            </div>
                                        </Td>

                                        <Td>{review.content}</Td>
                                        <Td>
                                            <ul className="flex">
                                                {starts.map(start => {
                                                    return <li key={start.number} title={start.sub} className='cursor-pointer'>
                                                        <StarIcon transition={'all'} boxSize={6} color={start.number <= review.start && 'yellow.400'}
                                                        />
                                                    </li>
                                                })}
                                            </ul>
                                        </Td>

                                        <Td>
                                            <div className="flex gap-4">
                                                <DeleteIcon
                                                    boxSize={5}
                                                    onClick={() => {
                                                        setReviewId(review._id);
                                                        onOpenVerify();
                                                    }}
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                        </Td>
                                    </Tr>
                                );
                            })}
                    </Tbody>
                </Table>
            </TableContainer>
            <InstanceModal
                show={isOpenVerify}
                hide={onCloseVerify}
                modalName={"Xác Nhận"}
                content={
                    <VerifyModal
                        handleVerify={handleRemoveReview}
                        hide={onCloseVerify}
                        title={"Xóa Đánh giá?"}
                    />
                }
            />
        </>
    );
};

export default ReviewTable;
