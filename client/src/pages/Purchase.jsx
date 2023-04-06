import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react'

import ProfileSidebar from "../components/Profile/ProfileSidebar";
import Header from "../components/Header";
import { getProfile } from "../Api/userAPI";
import { cancelOrder, getUserOrder } from "../Api/orderAPI";
import { renderStatusOrder } from "../utils/renderStatusOrder";
import InstanceModal from "../components/modal/InstanceModal";
import VerifyModal from '../components/modal/VerifyModal'
const Purchase = () => {
  const { orders } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [tabStatus, setTabStatus] = useState('');
  const {
    isOpen: isOpenVerify,
    onOpen: onOpenVerify,
    onClose: onCloseVerify,
  } = useDisclosure();
  const handleCancelOrder = async (status, id) => {
    status && await cancelOrder(dispatch, id);
  }
  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile(dispatch);
    };
    fetchProfile();
  }, []);
  useEffect(() => {
    const fetchPurchases = async (params) => {
      await getUserOrder(dispatch, params);
    };
    fetchPurchases({ status: tabStatus });
  }, [tabStatus]);

  return (
    <div className="w-[80%] mx-auto">
      <main className="container mx-auto">
        <Header />
        <section className="grid grid-cols-5 mt-8">
          <ProfileSidebar active="order" />
          <div className="col-span-4 ">
            <div className="flex justify-between">
              <p onClick={() => { setTabStatus('') }}
                className={`py-2 bg-gray-200 w-full text-center cursor-pointer duration-300 hover:bg-gray-400 
              ${tabStatus === '' && 'bg-gray-400 text-white'}`}>Tất cả</p>
              <p onClick={() => { setTabStatus('Chờ xác nhận') }}
                className={`py-2 bg-gray-200 w-full text-center cursor-pointer duration-300 hover:bg-gray-400 
              ${tabStatus === 'Chờ xác nhận' && 'bg-gray-400 text-white'}`}>Chờ Xác Nhận</p>
              <p onClick={() => { setTabStatus('Đã xác nhận') }}
                className={`py-2 bg-gray-200 w-full text-center cursor-pointer duration-300 hover:bg-gray-400 
              ${tabStatus === 'Đã xác nhận' && 'bg-gray-400 text-white'}`}>Đã xác nhận</p>
              <p onClick={() => { setTabStatus('Đang giao') }}
                className={`py-2 bg-gray-200 w-full text-center cursor-pointer duration-300 hover:bg-gray-400 
              ${tabStatus === 'Đang giao' && 'bg-gray-400 text-white'}`}>Đang giao</p>
              <p onClick={() => { setTabStatus('Đã giao') }}
                className={`py-2 bg-gray-200 w-full text-center cursor-pointer duration-300 hover:bg-gray-400 
              ${tabStatus === 'Đã giao' && 'bg-gray-400 text-white'}`}>Đã giao</p>
              <p onClick={() => { setTabStatus('Đã hủy') }}
                className={`py-2 bg-gray-200 w-full text-center cursor-pointer duration-300 hover:bg-gray-400 
              ${tabStatus === 'Đã hủy' && 'bg-gray-400 text-white'}`}>Đã hủy</p>
            </div>
            <ul className="mt-8 max-h-screen overflow-y-auto">
              {orders && orders.length > 0 ? orders.map(order => {
                return <li key={order._id} className="px-8 py-4 bg-white drop-shadow-xl mb-8">
                  <p className="font-bold">Mã đơn hàng: {order.orderCode}</p>
                  <span>{renderStatusOrder(order.status)}</span>
                  {order.products.map(product => {
                    return <div key={product.productId.sku} className="py-5 border-t border-b flex">
                      <figure >
                        <img src={product.productId.urlImages[0]} alt="" className="w-20" />
                      </figure>
                      <div className="ml-8">
                        <Link to={`/products/${product.productId._id}`}>
                          <p className="text-lg font-semibold hover:text-black/60">{product.productId.title}</p>
                        </Link>
                        <span>Phân loại : {product.productId.type}</span>
                        <p>{product.quantity}</p>
                      </div>
                      <span className="ml-auto text-red-400">{product.productId.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })}</span>
                    </div>
                  })}
                  <div className="text-right mt-8">
                    <p>
                      Thành tiền :{" "}
                      <span className="text-xl text-red-400">{order.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })}</span>
                    </p>
                    <Link to={`/tracking-order/${order._id}`}>
                      <button
                        className="mt-4 px-3 py-2 bg-primary text-white cursor-pointer rounded mr-2">
                        Xem chi tiết
                      </button>
                    </Link>
                    {order.status === 'Chờ xác nhận' && <button
                      onClick={onOpenVerify}
                      className="mt-4 px-3 py-2 bg-rose-500 text-white cursor-pointer rounded mr-2">
                      Hủy đơn
                    </button>}
                    <InstanceModal
                      show={isOpenVerify}
                      hide={onCloseVerify}
                      modalName={"Xác Nhận"}
                      content={
                        <VerifyModal
                          handleVerify={handleCancelOrder}
                          selectedId={order._id}
                          hide={onCloseVerify}
                          title={"Hủy đơn hàng?"}
                        />
                      }
                    />
                  </div>
                </li>
              }) : <p>Chưa có đơn hàng nào <Link className="text-blue-400" to={'/products'}>Mua hàng nào</Link>.</p>}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Purchase;
