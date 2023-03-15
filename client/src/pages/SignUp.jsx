import Header from "../components/Header";
import Footer from "../components/Footer";
const SignUp = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto">
          <Header />
          <div className="my-[57px]">
            <h1 className="text-center text-xl font-bold text-black">
              TẠO TÀI KHOẢN
            </h1>
            <div className="w-full mt-8 px-4 py-3 md:w-1/2 mx-auto bg-gray-100 flex flex-col justify-center">
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên"
              />
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="tel"
                name="phone"
                placeholder="Nhập số điện thoại"
              />
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="email"
                name="email"
                placeholder="Nhập email"
              />
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
              />
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="password"
                name="comfirmPassword"
                placeholder="Nhập lại mật khẩu"
              />

              <button className="mt-4 px-8 py-3 bg-primary rounded-sm hover:bg-hover cursor-pointer text-white font-bold ">
                ĐĂNG KÝ
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
