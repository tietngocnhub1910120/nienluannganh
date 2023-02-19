import {
  MdOutlineHome,
  MdMail,
  MdPhone,
  MdPrint,
  MdFacebook,
  MdSend,
} from "react-icons/md";
const Footer = () => {
  return (
    <footer className="mt-11 bg-black">
      <div className="app__container py-16">
        <div className="grid grid-cols-4 gap-x-4">
          <div>
            <h5 className="font-bold text-white mb-4">GIỚI THIỆU</h5>
            <span className="text-sm text-gray-400">
              Với hơn 100 nhân viên tư vấn trên mọi phương diện, không chỉ là
              hướng dẫn và xử lý các vấn đề từ Haravan, chúng tôi luôn mong cùng
              chia sẻ các kinh nghiệm giúp bạn bán được nhiều hàng hơn.
            </span>
            <ul className="mt-4 text-gray-400">
              <li className="flex gap-2 mb-2 items-center">
                <MdOutlineHome className="text-lg" />
                <span className="text-sm">
                  {" "}
                  Thường thạnh, Cái Răng, Cần Thơ
                </span>
              </li>
              <li className="flex gap-2 mb-2 items-center">
                <MdMail className="text-lg" />
                <span className="text-sm">tietngocnhu0103@gmail.com</span>
              </li>
              <li className="flex gap-2 mb-2 items-center">
                <MdPhone className="text-lg" />
                <span className="text-sm">0378056713</span>
              </li>
              <li className="flex gap-2 mb-2 items-center">
                <MdPrint className="text-lg" />
                <span className="text-sm">0378056713</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">LIÊN KẾT</h5>
            <ul>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Trang chủ
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Sản phẩm
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Blog
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Giới thiệu
                </span>
              </li>
              <li className="mb-2">
                <span className="text-sm cursor-pointer text-gray-400 hover:text-primary ease-linear duration-300">
                  Liên hệ
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">ĐĂNG KÝ NHẬN MAIL</h5>
            <div className="my-8 relative">
              <input
                type="email"
                className="w-full z-10 peer duration-300 ease-linear outline-none border-b focus:border-[#B49149] border-gray-300 bg-transparent text-sm text-gray-400 p-2"
                name="email"
                placeholder="Nhập email của bạn"
              />
              <button className="absolute right-2 top-2 duration-300 ease-linear hidden peer-focus:block">
                <MdSend className="text-primary text-lg" />
              </button>
            </div>
            <span className="text-sm text-gray-400">
              Hãy nhập email của bạn vào đây để nhận tin!
            </span>
            <ul className="flex gap-3 mt-4">
              <li className="text-white cursor-pointer text-lg rounded-full p-2 duration-300 ease-linear bg-transparent border hover:bg-primary">
                <span>
                  <MdFacebook />
                </span>
              </li>
              <li className="text-white cursor-pointer text-lg rounded-full p-2 duration-300 ease-linear bg-transparent border hover:bg-primary">
                <span>
                  <MdFacebook />
                </span>
              </li>
              <li className="text-white cursor-pointer text-lg rounded-full p-2 duration-300 ease-linear bg-transparent border hover:bg-primary">
                <span>
                  <MdFacebook />
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">KẾT NỐI VỚI CHÚNG TÔI</h5>
            <div className="mt-4">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="130"
                className="border-none overflow-hidden"
                scrolling="no"
                frameBorder={0}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
