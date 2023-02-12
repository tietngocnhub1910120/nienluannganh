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
    <section id="app-header" className="header">
      <div className="header__top flex justify-between items-center h-28">
        <div className="header__logo">
          <Link to="/">
            <figure>
              <img src={logo} alt="logo" />
            </figure>
          </Link>
        </div>

        <div className="header__auth flex items-center gap-2 ">
          <div className="header__auth text-right divide-y-[1px] divide-black">
            <ul className="header__controls flex gap-5 ">
              <li className="header__control flex items-center cursor-pointer">
                <MdPhone /> 0794290085
              </li>
              <li className="header__control cursor-pointer">ĐĂNG KÝ</li>
              <li className="header__control cursor-pointer">ĐĂNG NHẬP</li>
            </ul>
            <p className="header__sub text-sm">
              Miễn phí vận chuyển
              <span className="header__sub-hl text-[#B49149]">
                {" "}
                ĐƠN HÀNG TRÊN 500K
              </span>
            </p>
          </div>
          <div className="cart relative">
            <div className="cart__icon p-3 border-2 cursor-pointer relative peer  hover:border-[#B49149] duration-200 ease-linear">
              <MdOutlineShoppingBag className="text-4xl" />
              <span className="cart__count text-center text-white w-6 rounded-full bg-[#B49149] absolute top-0 right-0 ">
                2
              </span>
            </div>
            <div className="cart__sub z-10 absolute -left-[288px] -translate-y-6 invisible  opacity-0 duration-200 ease-in-out w-[350px] drop-shadow-[0_3px_3px_rgb(0,0,0,0.25)] rounded-sm bg-white peer-hover:translate-y-0 peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:translate-y-0 hover:visible">
              <h3 className="cart__title font-bold py-2 border-b-2 pl-3">
                Giỏ hàng của bạn
              </h3>
              <ul className="cart__list pt-3">
                <li className="cart__item flex cursor-pointer mb-2 justify-between px-3 bg-white duration-200 ease-linear hover:bg-gray-400/25 ">
                  <div className="cart__item-info flex gap-2 w-4/5">
                    <img
                      src={srcItem}
                      alt=""
                      className="cart__item-img w-11 h-11"
                    />
                    <span className="cart__item-name truncate">
                      Ghế đẩu sang trọng bật nhất việt nam
                    </span>
                  </div>
                  <span className="cart__item-price text-[#B49149]">
                    $300000
                  </span>
                </li>
                <li className="cart__item flex cursor-pointer mb-2 justify-between px-3 bg-white duration-200 ease-linear hover:bg-gray-400/25">
                  <div className="cart__item-info flex gap-2 w-4/5">
                    <img
                      src={srcItem}
                      alt=""
                      className="cart__item-img w-11 h-11"
                    />
                    <span className="cart__item-name truncate">
                      Ghế đẩu sang trọng bật nhất việt nam
                    </span>
                  </div>
                  <span className="cart__item-price">$300000</span>
                </li>
              </ul>
              <div className="w-100 h-0.5 bg-black mb-4"></div>
              <div className="cart__total flex justify-between mb-4 mx-3">
                <span className="font-bold">TỔNG TIỀN:</span>
                <span className="cart__price">$300000</span>
              </div>
              <div className="cart__controls flex justify-between mb-4 mx-3">
                <Link to={"/cart"}>
                  <span className="cart__view py-1 text-sm cursor-pointer bg-white drop-shadow-[4px_4px_rgba(0,0,0,0.50)] px-4 border-2 border-black  duration-200 ease-linear hover:bg-[#B49149] hover:text-white hover:drop-shadow-[3px_3px_rgba(0,0,0,0.50)]">
                    XEM GIỎ HÀNG
                  </span>
                </Link>
                <span className="cart__payment py-1 text-sm cursor-pointer bg-white drop-shadow-[4px_4px_rgba(0,0,0,0.50)] px-4 border-2 border-black duration-200 ease-linear hover:bg-[#B49149] hover:text-white hover:drop-shadow-[3px_3px_rgba(0,0,0,0.50)]">
                  THANH TOÁN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom h-14 border-t-2 flex justify-between items-center">
        <ul className="header__nav flex gap-7">
          <li className="header__nav-item cursor-pointer ">
            <span
              className="header__nav-link hover:text-[#B49149] text-base font-medium"
              title="TRANG CHỦ"
            >
              TRANG CHỦ
            </span>
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
    </section>
  );
};

export default Header;
