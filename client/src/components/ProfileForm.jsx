import avatar from "../assets/avatar.jpg";

const ProfileForm = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 mx-6">
        <div className="mt-8 ">
          <label className="text-gray-500">Tên đăng nhập</label>
          <input
            type="text"
            className="ml-6 font-medium"
            name="username"
            value={"anhthuong1"}
            disabled
          />
        </div>
        <div className="mt-8 flex items-center">
          <label className="text-gray-500 w-1/6">Tên</label>
          <input
            type="text"
            name="fullName"
            className="w-5/6 px-1 py-2 outline-none border-2 ml-6 font-medium rounded"
          />
        </div>
        <div className="mt-8 flex items-center">
          <label className="text-gray-500 w-1/6">Email</label>
          <input
            type="email"
            className="w-5/6 px-1 py-2 outline-none border-2 ml-6 font-medium rounded"
          />
        </div>
        <div className="mt-8 flex items-center">
          <label className="text-gray-500 w-1/5">Số điện thoại</label>
          <input
            type="tel"
            className="w-4/5 px-1 py-2 outline-none border-2 ml-6 font-medium rounded"
          />
        </div>
        <div className="mt-8 flex items-center gap-4 ">
          <label className="text-gray-500 w-1/6">Giới tính</label>
          <div className="flex items-center gap-2 w-1/6">
            <input type="radio" name="gender" className="" /> <span>Nam</span>
          </div>
          <div className="flex items-center gap-2 w-1/6">
            <input type="radio" name="gender" className="" /> <span>Nữ</span>
          </div>
          <div className="flex items-center gap-2 w-1/6">
            <input type="radio" name="gender" className="" /> <span>Khác</span>
          </div>
        </div>
        <div className="mt-8 flex items-center">
          <label className="text-gray-500 w-1/6">Ngày sinh</label>
          <input
            type="date"
            name="birthday"
            className="w-5/6 px-1 py-2 outline-none border-2 ml-6 font-medium rounded"
          />
        </div>
        <button className="mt-8 px-4 py-3 bg-primary rounded text-white font-semibold hover:bg-hover">
          Lưu
        </button>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col items-center">
          <figure className="w-28 rounded-full overflow-hidden">
            <img src={avatar} alt="" />
          </figure>
          <div className="mt-4 text-center">
            <label
              htmlFor="avatar"
              className="px-4 py-3 bg-gray-200 shadow-md text-gray-500 rounded cursor-pointer fo"
            >
              Chọn Ảnh
            </label>
            <input type="file" name="avatar" id="avatar" className="hidden" />
            <p className="mt-4 text-gray-500">
              Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
