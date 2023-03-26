const FormCheckout = () => {
  return (
    <form className="">
      <h1 className="text-lg font-bold mb-4">Thông tin giao hàng</h1>
      <input
        type="text"
        name="fullName"
        placeholder="Họ và tên"
        className="w-full px-2 py-3 outline-[#b49149] border rounded-md placeholder:text-gray-600 mb-3"
      />
      <div className="grid grid-cols-3 gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="col-span-2 px-2 py-3 outline-[#b49149] border rounded-md placeholder:text-gray-600 mb-3"
        />
        <input
          type="tel"
          name="numberPhone"
          placeholder="số điện thoại"
          className="col-span-1 px-2 py-3 outline-[#b49149] border rounded-md placeholder:text-gray-600 mb-3"
        />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Địa chỉ"
        className="w-full px-2 py-3 outline-[#b49149] border rounded-md placeholder:text-gray-600 mb-3"
      />
      <div className="grid grid-cols-2 gap-3 mb-3">
        <select
          name="city"
          className="px-2 py-3 border rounded-md text-gray-600"
        >
          <option value="soctrang">Soc Trang</option>
        </select>
        <select
          name="city"
          className="px-2 py-3 border rounded-md text-gray-600"
        >
          <option value="soctrang">Soc Trang</option>
        </select>
        <select
          name="city"
          className="px-2 py-3 border rounded-md text-gray-600"
        >
          <option value="soctrang">Soc Trang</option>
        </select>
      </div>
      <textarea
        name="note"
        id=""
        rows="5"
        placeholder="Ghi chú"
        className="w-full px-2 py-3 outline-[#b49149] border rounded-md placeholder:text-gray-600 mb-3"
      ></textarea>
    </form>
  );
};

export default FormCheckout;
