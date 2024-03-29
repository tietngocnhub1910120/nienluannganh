import avatar from "../assets/logo.webp";
import {
  MdDashboard,
  MdFactCheck,
  MdImage,
  MdLogout,
  MdAdd,
  MdComment
} from "react-icons/md";
import { Link } from "react-router-dom";
import { logout } from "../Api/authAPI";
import { useDispatch } from "react-redux";
const NavAdmin = (props) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout(dispatch);
  };
  return (
    <div className="">
      <Link to={"/"}>
        <figure className="py-10 px-10">
          <img src={avatar} alt="" />
        </figure>
      </Link>
      <ul>
        <Link to={"/manage/product"}>
          <li
            className={
              (props.navActive === "products" ? "bg-gray-300" : "") +
              " flex items-center gap-5  duration-200 cursor-pointer py-4 hover:bg-primary"
            }
          >
            <MdDashboard className="text-3xl ml-4" />
            <span className="text-xl font-medium">Quản lý Sản phẩm</span>
          </li>
        </Link>
        <Link to={"/manage/order"}>
          <li
            className={
              (props.navActive === "orders" ? "bg-gray-300" : "") +
              " flex items-center gap-5  duration-200 cursor-pointer py-4 hover:bg-primary"
            }
          >
            <MdFactCheck className="text-3xl ml-4" />
            <span className="text-xl font-medium">Quản lý Đơn hàng</span>
          </li>
        </Link>
        <Link to={"/manage/review"}>
          <li
            className={
              (props.navActive === "review" ? "bg-gray-300" : "") +
              " flex items-center gap-5  duration-200 cursor-pointer py-4 hover:bg-primary"
            }
          >
            <MdComment className="text-3xl ml-4" />
            <span className="text-xl font-medium">Quản lý đánh giá</span>
          </li>
        </Link>
        <Link to={"/manage/product/add"}>
          <li
            className={
              (props.navActive === "add" ? "bg-gray-300" : "") +
              " flex items-center gap-5  duration-200 cursor-pointer py-4 hover:bg-primary"
            }
          >
            <MdAdd className="text-3xl ml-4" />
            <span className="text-xl font-medium">Thêm sản phẩm</span>
          </li>
        </Link>
        <li
          onClick={handleLogout}
          className=" flex items-center gap-5  duration-200 cursor-pointer py-4 hover:bg-primary"
        >
          <MdLogout className="text-3xl ml-4" />
          <span className="text-xl font-medium">Đăng xuất</span>
        </li>
      </ul>
    </div>
  );
};

export default NavAdmin;
