import { StarIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import { editReview, postReview } from '../../Api/reviewAPI';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
const CommentForm = ({ isEdit, dataEdit, setIsEdit }) => {
  const { productId } = useParams()
  const starts = [
    { number: 1, sub: 'Rất tệ' },
    { number: 2, sub: 'Tệ' },
    { number: 3, sub: 'Trung bình' },
    { number: 4, sub: 'Tốt' },
    { number: 5, sub: 'Rất tốt' },
  ]
  const [startNumber, setStartNumber] = useState(0)
  const [hoverStart, setHoverStart] = useState(0)
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const handlePostReview = async () => {
    await postReview(dispatch, { startNumber, content }, productId)
  }
  const handleUpdateReview = async () => {
    await editReview(dispatch, { startNumber, content }, dataEdit._id)
    setIsEdit(false)
  }
  useEffect(() => {
    if (isEdit) {
      setContent(dataEdit?.content);
      setStartNumber(dataEdit?.start);
    }
  }, [])
  return (
    <div className="w-full">
      <ul className='flex gap-1 my-4'>
        {starts.map(start => {
          return <li key={start.number} title={start.sub} className='cursor-pointer'>
            <StarIcon transition={'all'} boxSize={6} color={start.number <= (startNumber ? startNumber : hoverStart) && 'yellow.400'}
              onMouseOver={() => {
                setHoverStart(start.number)
              }}
              onMouseLeave={() => {
                setHoverStart(0)
              }}
              onClick={() => {
                setStartNumber(start.number)
              }}
            />
          </li>
        })

        }
      </ul>
      <textarea
        defaultValue={content}
        onChange={(e) => { setContent(e.target.value) }}
        className="py-1 px-2 outline-none border rounded-md"
        name="comment"
        cols="100"
        rows="6"
        placeholder="Viết đánh giá..."
        required
      ></textarea>

      {!isEdit ? <button className="block px-3 py-2 mt-2 bg-blue-700 rounded-md text-white" onClick={handlePostReview}>
        Đánh giá
      </button> :
        <div className='flex gap-2'>
          <button className="block px-3 py-2 mt-2 bg-blue-700 rounded-md text-white" onClick={handleUpdateReview}>
            Cập nhật
          </button>
          <button className="block px-3 py-2 mt-2 border border-blue-700 rounded-md text-blue-700" onClick={() => { setIsEdit(false) }}>
            Hủy
          </button>
        </div>
      }

    </div>
  );
};

export default CommentForm;
