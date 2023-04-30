import { useDispatch, useSelector } from "react-redux";
import { MdSearch } from "react-icons/md";
import { useRef, useState } from "react";
import { getAllOrder } from '../Api/orderAPI'
import { getAllProduct } from "../Api/productAPI";
const TopPane = (props) => {
  const { tab } = props
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
  const timeOutRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')

  const seachingOrderByEmail = e => {
    const value = e.target.value;
    setSearchTerm(value);
    clearTimeout(timeOutRef.current)

    timeOutRef.current = setTimeout(async () => {
      await getAllOrder(dispatch, { email: value })
    }, 1000)
  }

  const seachingProductByName = e => {
    const value = e.target.value;
    setSearchTerm(value);
    clearTimeout(timeOutRef.current)

    timeOutRef.current = setTimeout(async () => {
      await getAllProduct(dispatch, { title: value })
    }, 1000)
    // searchingOrder
  }
  return (
    <div className="flex justify-between p-2">
      {tab && tab !== 'review' && <div className="relative flex items-center  px-4 py-3 gap-2 rounded  w-[320px] border border-primary">
        <MdSearch className="text-2xl text-gray-500" />
        <input
          value={searchTerm}
          onChange={tab === 'order' ? seachingOrderByEmail : seachingProductByName}
          type="text"
          placeholder={tab === 'order' ? "Nhập email...." : "Nhập tên sản phẩm...."}
          className="outline-none bg-transparent w-full"
        />
      </div>}

      <div className="flex items-center ml-auto">
        <span className="mr-4 font-medium">{user.username}</span>
        <figure>
          <img
            src={user.avatar}
            alt=""
            className="w-11 h-11 object-cover rounded-full "
          />
        </figure>
      </div>
    </div>
  );
};

export default TopPane;
