import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import { renderStatusOrderHasCon } from "../utils/renderStatusOrder";
import { useEffect, useState } from "react";
import { trackingOrder } from "../Api/orderAPI";
const TrackingOrder = (props) => {
  const { orderId } = useParams()
  const [order, setOrder] = useState(null)
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const fetchOrder = async (orderId) => {
      const data = await trackingOrder(orderId);
      setOrder(data.order);
      setStatus(data.order.status)
    }
    fetchOrder(orderId)

  }, [orderId])
  return (
    <div className="w-[80%] mx-auto">
      <main className="container mx-auto">
        <Header />
        <h1 className="mt-8 text-center text-2xl font-semibold">
          THÔNG TIN ĐƠN HÀNG
        </h1>

        <div className="h-[1px] w-full bg-gray-500 my-8"></div>

        <div className="flex justify-between">
          <h3 className="font-bold text-base">
            TRẠNG THÁI ĐƠN HÀNG <span className="text-primary">{order?.orderCode}</span>
          </h3>
          <span>Thanh toán COD - Tốc độ tiêu chuẩn</span>
        </div>

        {status === "Đã hủy" ? (
          <h1 className="text-5xl text-center font-bold text-red-500 my-8">
            Đơn Hàng đã hủy!
          </h1>
        ) : (
          <>
            <ul className="h-16 grid grid-cols-4 mt-4 ">
              <li
                className={`w-full relative text-white px-8 py-5 after:custom-after ${renderStatusOrderHasCon(
                  status,
                  []
                )}`}
              >
                <span>CHỜ XÁC NHẬN</span>
              </li>
              <li
                className={`w-full relative text-white px-8 py-5 after:custom-after ${renderStatusOrderHasCon(
                  status,
                  ["Chờ xác nhận"]
                )}`}
              >
                <span>ĐẶT HÀNG THÀNH CÔNG</span>
              </li>
              <li
                className={`w-full relative text-white px-8 py-5 after:custom-after ${renderStatusOrderHasCon(
                  status,
                  ["Chờ xác nhận", "Đã xác nhận"]
                )}`}
              >
                <span>ĐANG GIAO HÀNG</span>
              </li>
              <li
                className={`w-full relative text-white px-8 py-5 after:custom-after ${renderStatusOrderHasCon(
                  status,
                  ["Chờ xác nhận", "Đã xác nhận", "Đang giao"]
                )}`}
              >
                <span>GIAO HÀNG THÀNH CÔNG</span>
              </li>
            </ul>
            <div className="grid grid-cols-4 mt-4 gap-2 pb-8 border-b-2 border-dashed border-gray-500">
              <div className="">
                <p className="text-sm">Vào lúc 21:10 - 12/06/2022</p>
                <p className="mt-8 text-sm">
                  Thời gian xử lý đơn hàng có thể từ 1-2 ngày làm việc. Vui lòng
                  gọi đến hotline 0963 429 749 (trong giờ hành chính) nếu bạn
                  muốn thay đổi thông tin đơn hàng trước khi đơn hàng của bạn
                  được CHUYỂN QUA GIAO NHẬN.
                </p>
              </div>
              <div className="">
                <p className="text-sm">Vào lúc 18:17 - 14/06/2022</p>
                <p className="mt-8 text-sm">
                  Đơn hàng của bạn đã được đóng gói và chuyển cho đơn vị vận
                  chuyển.
                </p>
              </div>
              <div className="">
                <p className="text-sm">Vào lúc 21:23 - 14/06/2022</p>
                <p className="mt-8 text-sm">
                  Thời gian giao hàng tuỳ thuộc vào địa điểm và phương thức giao
                  hàng bạn đã chọn. Hãy tin rắng chúng tôi luôn cố gắng để hàng
                  đến tay bạn sớm nhất!
                </p>
              </div>
              <div className="">
                <p className="text-sm">Vào lúc 17:16 - 16/06/2022</p>
                <p className="mt-8 text-sm">
                  Đơn hàng đã được giao thành công ! Chúc bạn có một trải nghiệm
                  thú vị ^^
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-8 mt-10">
              <li className="px-5 py-6 text-gray-500 bg-gray-100">
                <h4 className="text-black font-bold">THÔNG TIN KHÁCH HÀNG</h4>
                <div className="h-[1px] w-full bg-black my-2"></div>
                <p className="mt-2">Họ tên: {order.userId.username}</p>
                <p className="mt-2">Điện thoại: {order.userId.phone}</p>
                <p className="mt-2">Email: {order.userId.email}</p>
                <p className="mt-2">Địa chỉ: {order.userId.address}</p>
              </li>
              <li className="px-5 py-6 text-gray-500 bg-gray-100">
                <h4 className="text-black font-bold">THÔNG TIN GIAO NHẬN</h4>
                <div className="h-[1px] w-full bg-black my-2"></div>
                <p className="mt-2">Họ tên: {order.username}</p>
                <p className="mt-2">Điện thoại: {order.phone}</p>
                <p className="mt-2">Email: {order.email}</p>
                <p className="mt-2">Địa chỉ: {order.address}</p>
              </li>
              <li className="px-5 py-6 text-gray-500 bg-gray-100">
                <h4 className="text-black font-bold">DANH SÁCH SẢN PHẨM</h4>
                <div className="h-[1px] w-full bg-black my-2"></div>
                <ul className="h-52 overflow-y-auto">
                  {order.products.map((product) => {
                    return (
                      <li className="flex gap-4 mt-4">
                        <figure className="w-44 h-44">
                          <img src={product.productId.urlImages[0]} alt="" />
                        </figure>
                        <div className="flex flex-col">
                          <h5 className="mb-4 font-semibold">
                            {product.productId.title}
                          </h5>
                          <p className="font-semibold">
                            Giá: <span className="font-normal">{product.productId.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "VND",
                            })}</span>
                          </p>

                          <p className="font-semibold">
                            Số lượng: <span className="font-normal">{product.quantity}</span>
                          </p>

                          <p className="mt-8 font-semibold">{Number(product.quantity * product.productId.price).toLocaleString("en-US", {
                            style: "currency",
                            currency: "VND",
                          })}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li className="px-5 py-6 text-gray-500 bg-gray-100">
                <h4 className="text-black font-bold">THANH TOÁN</h4>
                <div className="h-[1px] w-full bg-black my-2"></div>
                <div className="py-6 border-gray-500 border-b-2 border-dashed">
                  <p className="flex justify-between">
                    Trị giá đơn hàng:{" "}
                    <span className="font-semibold">{order.amount.toLocaleString("en-US", {
                      style: "currency",
                      currency: "VND",
                    })}</span>
                  </p>
                  <p className="flex justify-between">
                    Giảm giá: <span className="font-semibold">0 VNĐ</span>
                  </p>
                  <p className="flex justify-between">
                    Phí giao hàng:{" "}
                    <span className="font-semibold">{order.COD.toLocaleString("en-US", {
                      style: "currency",
                      currency: "VND",
                    })}</span>
                  </p>
                  <p className="flex justify-between">
                    Phí thanh toán: <span className="font-semibold">0 VNĐ</span>
                  </p>
                </div>
                <p className="font-semibold flex justify-between mt-4">
                  Tổng thanh toán: <span>{order.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
                </p>
              </li>
            </ul>
          </>
        )}

        <div className="flex justify-end mt-8">
          <Link to={"/"}>
            <button className="px-8 py-3 bg-primary cursor-pointer text-white font-bold ">
              QUAY LẠI TRANG CHỦ
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TrackingOrder;
