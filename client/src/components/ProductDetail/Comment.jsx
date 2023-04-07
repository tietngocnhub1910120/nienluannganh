import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StarIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import { MdMoreHoriz } from "react-icons/md";
import moment from 'moment'

import InstanceModal from '../modal/InstanceModal';
import VerifyModal from '../modal/VerifyModal';
import CommentForm from './CommentForm';

import { removeReview } from '../../Api/reviewAPI';
function Comment(props) {
    const {
        isOpen,
        onOpen,
        onClose,
    } = useDisclosure();
    const dispatch = useDispatch()
    const { review } = props
    const user = useSelector((state) => state.auth.user);
    const [option, setOption] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const starts = [
        { number: 1, sub: 'Rất tệ' },
        { number: 2, sub: 'Tệ' },
        { number: 3, sub: 'Trung bình' },
        { number: 4, sub: 'Tốt' },
        { number: 5, sub: 'Rất tốt' },
    ]
    const handleRemove = async (check, reviewId) => {
        console.log(check, reviewId);
        if (check) {
            await removeReview(dispatch, reviewId)
        }
    }
    return (
        <li className="mt-4 p-4 border-b">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <figure className="w-8 h-8 rounded-full overflow-hidden">
                        <img src={review.userId.avatar} alt="avatar" />
                    </figure>
                    <span className="text-sm text-gray-500 font-medium">
                        {review.userId.email}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                        {moment(review.createdAt).fromNow()}
                    </span>
                </div>
                {user._id === review.userId._id && <span className="relative p-1 rounded-md cursor-pointer hover:bg-gray-200">
                    <MdMoreHoriz
                        className="text-2xl text-gray-400"
                        onClick={() => {
                            setOption(!option);
                        }}
                    />
                    {option ? (
                        <ul className="absolute top-10 left-0 bg-white shadow-md ">
                            <li className="p-2" onClick={() => {
                                setIsEdit(true)
                            }}>Edit

                            </li>
                            <li className="p-2" onClick={onOpen}>Remove
                                <InstanceModal
                                    show={isOpen}
                                    hide={onClose}
                                    modalName={"Xác nhận"}
                                    content={
                                        <VerifyModal
                                            title='Xóa đánh giá này?'
                                            handleVerify={handleRemove}
                                            hide={onClose}
                                            selectedId={review._id}
                                        />
                                    }
                                />
                            </li>
                        </ul>

                    ) : null}
                </span>}

            </div>
            {!isEdit ? <div className="mt-2">
                <ul className="flex">
                    {
                        starts.map(start => {
                            return <li key={start.number} title={start.sub} className='cursor-pointer'>
                                <StarIcon transition={'all'} boxSize={6} color={start.number <= review.start && 'yellow.400'}
                                />
                            </li>
                        })
                    }
                </ul>
                <p className="mt-2 text-gray-500 text-justify">
                    {review.content}
                </p>
            </div>
                : <CommentForm isEdit={isEdit} dataEdit={review} setIsEdit={setIsEdit} />
            }
        </li>
    );
}

export default Comment;