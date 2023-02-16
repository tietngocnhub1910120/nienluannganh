const TrackingOrder = () => {
  return (
    <main className="app__container">
      <h1 className="mt-8 text-center text-2xl font-semibold">
        THÔNG TIN ĐƠN HÀNG
      </h1>
      <div className="h-[1px] w-full bg-gray-500 my-8"></div>

      <div className="flex justify-between">
        <h3 className="font-bold text-base">
          TRẠNG THÁI ĐƠN HÀNG <span className="text-primary">W0317837</span>
        </h3>
        <span>Thanh toán COD - Tốc độ tiêu chuẩn</span>
      </div>

      <ul className="h-16 grid grid-cols-4 mt-4 ">
        <li className="w-full relative px-8 py-5 bg-black after:custom-after">
          <span className="text-white hover:text-primary">
            ĐẶT HÀNG THÀNH CÔNG
          </span>
        </li>
        <li className="w-full relative px-8 py-5 bg-black after:custom-after">
          <span className="text-white">CHUYỂN QUA GIAO NHẬN</span>
        </li>
        <li className="w-full relative px-8 py-5 bg-black after:custom-after">
          <span className="text-white">ĐANG GIAO HÀNG</span>
        </li>
        <li className="w-full relative px-8 py-5 bg-black">
          <span className="text-white">GIAO HÀNG THÀNH CÔNG</span>
        </li>
      </ul>
      <div className="grid grid-cols-4 mt-4 gap-2">
        <div className="">
          <p className="text-sm">Vào lúc 21:10 - 12/06/2022</p>
          <p className="mt-8 text-sm">
            Thời gian xử lý đơn hàng có thể từ 1-2 ngày làm việc. Vui lòng gọi
            đến hotline 0963 429 749 (trong giờ hành chính) nếu bạn muốn thay
            đổi thông tin đơn hàng trước khi đơn hàng của bạn được CHUYỂN QUA
            GIAO NHẬN.
          </p>
        </div>
        <div className="">
          <p className="text-sm">Vào lúc 18:17 - 14/06/2022</p>
          <p className="mt-8 text-sm">
            Đơn hàng của bạn đã được đóng gói và chuyển cho đơn vị vận chuyển.
          </p>
        </div>
        <div className="">
          <p className="text-sm">Vào lúc 21:23 - 14/06/2022</p>
          <p className="mt-8 text-sm">
            Thời gian giao hàng tuỳ thuộc vào địa điểm và phương thức giao hàng
            bạn đã chọn. Hãy tin rắng chúng tôi luôn cố gắng để hàng đến tay bạn
            sớm nhất!
          </p>
        </div>
        <div className="">
          <p className="text-sm">Vào lúc 17:16 - 16/06/2022</p>
          <p className="mt-8 text-sm">
            Đơn hàng đã được giao thành công ! Chúc bạn có một trải nghiệm thú
            vị ^^
          </p>
        </div>
      </div>
    </main>
  );
};

export default TrackingOrder;
