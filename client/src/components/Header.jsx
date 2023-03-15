import logo from "../assets/logo.webp";
import srcItem from "../assets/upload_28084a5fbcff41519efdb422e62c3f3e_large.webp";
import { Link } from "react-router-dom";

import {
  MdPhone,
  MdOutlineShoppingBag,
  MdOutlineArrowDropDown,
  MdSearch,
  MdChevronRight,
} from "react-icons/md";
const Header = () => {
  return (
    <header className="w-full">
      <div className=" flex justify-between items-center h-28">
        <div className="">
          <Link to="/">
            <figure>
              <img src={logo} alt="logo" />
            </figure>
          </Link>
        </div>

        <div className=" flex items-center gap-2 ">
          <div className=" text-right divide-y-[1px] divide-black">
            <ul className=" flex gap-5 ">
              <li className=" flex items-center cursor-pointer">
                <MdPhone /> 0794290085
              </li>
              <li className="relative flex items-center gap-1 rounded p-1 group">
                <figure className="w-6 h-6 rounded-full overflow-hidden">
                  <img src={srcItem} alt="" />
                </figure>
                <span className="text-sm cursor-pointer font-light hover:text-black/70">
                  Duong Thuong
                </span>
                <ul className="absolute w-[160px] top-8 right-0 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-left bg-primary  py-2 z-10 text-white">
                  <li className="mt-3 ml-3 hover:text-white/70">
                    <Link to={"/user/profile"}>
                      <span>Tài khoản của tôi</span>
                    </Link>
                  </li>
                  <li className="mt-3 ml-3 hover:text-white/70">
                    <Link to={"/user/purchase"}>
                      <span>Đơn mua</span>
                    </Link>
                  </li>
                  <li className="mt-3 ml-3 hover:text-white/70">
                    <span>Đăng xuất</span>
                  </li>
                </ul>
              </li>
              <li className=" cursor-pointer">
                <Link to={"/signup"}>
                  <span>ĐĂNG KÝ</span>
                </Link>
              </li>
              <li className=" cursor-pointer">
                <Link to={"/signin"}>
                  <span>ĐĂNG NHẬP</span>
                </Link>
              </li>
            </ul>
            <p className="text-sm">
              Miễn phí vận chuyển
              <span className=" text-[#B49149]"> ĐƠN HÀNG TRÊN 500K</span>
            </p>
          </div>
          <div className=" relative">
            <div className=" p-3 border-2 cursor-pointer relative peer  hover:border-[#B49149] duration-200 ease-linear">
              <MdOutlineShoppingBag className="text-4xl" />
              <span className=" text-center text-white w-6 rounded-full bg-[#B49149] absolute top-0 right-0 ">
                2
              </span>
            </div>
            <div className=" z-10 absolute -left-[288px] -translate-y-6 invisible opacity-0 duration-200 ease-in-out w-[350px] drop-shadow-[0_3px_3px_rgb(0,0,0,0.25)] rounded-sm bg-white peer-hover:translate-y-0 peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:translate-y-0 hover:visible">
              <h3 className=" font-bold py-2 border-b-2 pl-3">
                Giỏ hàng của bạn
              </h3>
              <ul className=" pt-3">
                <li className=" flex cursor-pointer justify-between px-3 py-2 bg-white duration-200 ease-linear hover:bg-gray-400/25 ">
                  <div className="-info flex tems-center gap-2 w-4/5">
                    <figure className="-img w-11">
                      <img src={srcItem} alt="" />
                    </figure>
                    <span className="-name truncate">
                      Ghế đẩu sang trọng bật nhất việt nam
                    </span>
                  </div>
                  <span className="-price text-[#B49149]">$300000</span>
                </li>
                <li className=" flex cursor-pointer justify-between px-3 py-2 bg-white duration-200 ease-linear hover:bg-gray-400/25 ">
                  <div className=" flex tems-center gap-2 w-4/5">
                    <figure className=" w-11">
                      <img src={srcItem} alt="" />
                    </figure>
                    <span className=" truncate">
                      Ghế đẩu sang trọng bật nhất việt nam
                    </span>
                  </div>
                  <span className=" text-[#B49149]">$300000</span>
                </li>
              </ul>
              <div className="w-100 h-0.5 bg-black my-4"></div>
              <div className=" flex justify-between mb-4 mx-3">
                <span className="font-bold">TỔNG TIỀN:</span>
                <span className="">$300000</span>
              </div>
              <div className=" flex justify-between mb-4 mx-3">
                <Link to={"/cart"}>
                  <span className=" py-1 text-sm cursor-pointer bg-white drop-shadow-[4px_4px_rgba(0,0,0,0.50)] px-4 border-2 border-black  duration-200 ease-linear hover:bg-[#B49149] hover:text-white hover:drop-shadow-[3px_3px_rgba(0,0,0,0.50)]">
                    XEM GIỎ HÀNG
                  </span>
                </Link>
                <Link to={"/cart/checkout"}>
                  <span className=" py-1 text-sm cursor-pointer bg-white drop-shadow-[4px_4px_rgba(0,0,0,0.50)] px-4 border-2 border-black duration-200 ease-linear hover:bg-[#B49149] hover:text-white hover:drop-shadow-[3px_3px_rgba(0,0,0,0.50)]">
                    THANH TOÁN
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom h-14 border-t-2 flex justify-between items-center">
        <ul className="header__nav flex gap-7">
          <li className="header__nav-item cursor-pointer ">
            <Link to={"/"}>
              <span
                className="header__nav-link hover:text-[#B49149] text-base font-medium"
                title="TRANG CHỦ"
              >
                TRANG CHỦ
              </span>
            </Link>
          </li>
          <li className="header__nav-item relative cursor-pointer text-base font-medium">
            <Link
              to={"/products"}
              className="header__nav-link flex items-center hover:text-[#B49149] peer"
              title="SẢN PHẨM"
            >
              SẢN PHẨM <MdOutlineArrowDropDown className="text-lg " />
            </Link>
            <ul
              className="header__subnav duration-300 invisible opacity-0 -translate-y-0 peer-hover:visible peer-hover:opacity-100
             peer-hover:translate-y-6 hover:visible hover:opacity-100 hover:translate-y-6 absolute left-0 bg-white w-[280px] border-t-4 border-t-[#b18a3b] pt-6 pl-6
             after:content-[''] after:w-full after:h-10 after:bg-transparent after:absolute after:left-0 after:-top-5 z-10"
            >
              <li className="header__subnav-item cursor-pointer pb-6 hover:text-[#B49149] flex items-center justify-between">
                <span className="header__subnav-link text-base font-normal">
                  Nội thất phòng khách
                </span>
                <MdChevronRight className="mr-2 text-lg" />
              </li>
              <li className="header__subnav-item cursor-pointer pb-6 hover:text-[#B49149] flex items-center justify-between ">
                <span className="header__subnav-link text-base font-normal  ">
                  Nội thất phòng ngủ
                </span>
                <MdChevronRight className="mr-2 text-lg" />
              </li>
              <li className="header__subnav-item cursor-pointer pb-6 hover:text-[#B49149] flex items-center justify-between ">
                <span className="header__subnav-link text-base font-normal  ">
                  Nội thất văn phòng
                </span>
                <MdChevronRight className="mr-2 text-lg" />
              </li>
              <li className="header__subnav-item cursor-pointer pb-6 hover:text-[#B49149] ">
                <span className="header__subnav-link text-base font-normal  ">
                  Nội thất phòng bếp
                </span>
              </li>
              <li className="header__subnav-item cursor-pointer pb-6 hover:text-[#B49149] ">
                <span className="header__subnav-link text-base font-normal  ">
                  Đồ trang trí
                </span>
              </li>
            </ul>
          </li>
          <li className="header__nav-item cursor-pointer">
            <Link
              to={"/blog"}
              className="header__nav-link hover:text-[#B49149] text-base font-medium"
              title="BLOG"
            >
              BLOG
            </Link>
          </li>
          <li className="header__nav-item cursor-pointer ">
            <Link
              to={"/about"}
              className="header__nav-link hover:text-[#B49149] text-base font-medium"
              title="GIỚI THIỆU"
            >
              GIỚI THIỆU
            </Link>
          </li>
          <li className="header__nav-item cursor-pointer ">
            <Link
              to="/contact"
              className="header__nav-link hover:text-[#B49149] text-base font-medium"
              title="LIÊN HỆ"
            >
              LIÊN HỆ
            </Link>
          </li>
        </ul>
        <div className="relative header__search rounded-sm flex items-center bg-gray-200 duration-150 focus-within:bg-white focus-within:border focus-within:border-black">
          <input
            type="text"
            name="name"
            id="name"
            className="outline-none block py-2 px-3 text-sm bg-gray-200 placeholder:text-sm placeholder:italic duration-150 focus:bg-white"
            placeholder="Tìm kiếm..."
          />
          <MdSearch className="text-xl text-gray-500 mr-3" />
        </div>
      </div>
    </header>
  );
};

export default Header;
