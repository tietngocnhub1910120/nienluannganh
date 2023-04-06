import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react';
const CommentForm = () => {
  const starts = [
    { number: 1, sub: 'Rất tệ' },
    { number: 2, sub: 'Tệ' },
    { number: 3, sub: 'Trung bình' },
    { number: 4, sub: 'Tốt' },
    { number: 5, sub: 'Rất tốt' },
  ]
  const [startNumber, setStartNumber] = useState(0)
  const handleBlur = number => {
    setStartNumber(number);
  }
  return (
    <div className="w-full">
      <p className="font-semibold my-4">0 Bình luận</p>
      <ul className='flex gap-1 my-4'>
        {starts.map(start => {
          return <li key={start.number} title={start.sub}>
            <StarIcon transition={'all'} boxSize={6} color={start.number <= startNumber && 'yellow.400'} onMouseOver={() => {
              handleBlur(start.number)
            }} />


          </li>
        })

        }
      </ul>
      <textarea
        className="py-1 px-2 outline-none border rounded-md"
        name="comment"
        cols="100"
        rows="6"
        placeholder="Viết đánh giá..."
      ></textarea>

      <button className="block px-3 py-2 mt-2 bg-blue-700 rounded-md text-white">
        Đánh giá
      </button>
    </div>
  );
};

export default CommentForm;
