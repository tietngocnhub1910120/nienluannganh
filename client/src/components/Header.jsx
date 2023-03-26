import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Library
import { MdPhone, MdOutlineShoppingBag, MdSearch } from "react-icons/md";
import logo from "../assets/logo.webp";
//Utils
import renderTotalPrice from "../utils/renderTotalPrice";
//API
import { logout } from "../Api/authAPI";
import { getCart } from "../Api/cartAPI";
const Header = (props) => {
  const { activeHeader } = props;
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout(dispatch);
  };
  useEffect(() => {
    const fetchCart = async () => {
      await getCart(dispatch);
    };
    user && fetchCart();
  }, [user]);
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
                <MdPhone /> 0378056713
              </li>
              {user ? (
                <>
                  <li className="relative flex items-center gap-1 rounded p-1 group">
                    <figure>
                      <img
                        src={user.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </figure>
                    <span className="text-sm cursor-pointer font-light hover:text-black/70">
                      {user.email}
                    </span>
                    <ul className="absolute w-[160px] top-8 right-0 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-left bg-primary  py-2 z-10 text-white">
                      <Link to={"/user/profile"}>
                        <li className="mt-3 ml-3 hover:text-white/70">
                          <span>Tài khoản của tôi</span>
                        </li>
                      </Link>
                      <Link to={"/user/purchase"}>
                        <li className="mt-3 ml-3 hover:text-white/70">
                          <span>Đơn mua</span>
                        </li>
                      </Link>
                      {user.admin ? (
                        <Link to={"/manage/product"}>
                          <li className="mt-3 ml-3 hover:text-white/70">
                            <span>Quản lý sản phẩm</span>
                          </li>
                        </Link>
                      ) : null}
                      <li
                        onClick={handleLogout}
                        className="mt-3 ml-3 hover:text-white/70"
                      >
                        <span>Đăng xuất</span>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
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
                {cart && cart.products?.length}
              </span>
            </div>
            <div className=" z-10 absolute -left-[288px] -translate-y-6 invisible opacity-0 duration-200 ease-in-out w-[350px] drop-shadow-[0_3px_3px_rgb(0,0,0,0.25)] rounded-sm bg-white peer-hover:translate-y-0 peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:translate-y-0 hover:visible">
              <h3 className=" font-bold py-2 border-b-2 pl-3">
                Giỏ hàng của bạn
              </h3>
              <ul className=" pt-3">
                {cart && cart.products ? (
                  cart.products.map((product) => {
                    return (
                      <li
                        key={product._id}
                        className=" flex cursor-pointer justify-between px-3 py-2 bg-white duration-200 ease-linear hover:bg-gray-400/25 "
                      >
                        <div className="-info flex tems-center gap-2 w-4/5">
                          <figure className="-img w-11">
                            <img src={product?.productId.urlImages[0]} alt="" />
                          </figure>
                          <span className=" truncate">
                            {product?.productId.title}
                          </span>
                        </div>
                        <span className=" text-[#B49149]">
                          {product?.productId.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </li>
                    );
                  })
                ) : (
                  <p className="text-center">Không có sản phẩm</p>
                )}
              </ul>
              <div className="w-100 h-0.5 bg-black my-4"></div>
              <div className=" flex justify-between mb-4 mx-3">
                <span className="font-bold">TỔNG TIỀN:</span>
                <span className="">
                  {renderTotalPrice(cart.products)?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
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
          <Link to={"/"}>
            <li className="">
              <span
                className={`hover:text-[#B49149] text-base font-medium ${activeHeader === "home" && "text-primary"
                  }`}
                title="TRANG CHỦ"
              >
                TRANG CHỦ
              </span>
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="">
              <span
                className={`hover:text-[#B49149] text-base font-medium ${activeHeader === "products" && "text-primary"
                  }`}
                title="SẢN PHẨM"
              >
                SẢN PHẨM
              </span>
            </li>
          </Link>
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
