import avatar from "../assets/avatar.jpg";
import { MdOutlinePersonOutline, MdOutlineEventNote } from "react-icons/md";
import { Link } from "react-router-dom";
const ProfileSidebar = () => {
  return (
    <div className="col-span-1">
      <div className="flex gap-2">
        <figure className="w-12 rounded-full overflow-hidden">
          <img src={avatar} alt="" />
        </figure>
        <p className="text-base font-semibold">anhthuong2001</p>
      </div>
      <ul className="mt-8">
        <li className="flex gap-2 items-center ">
          <MdOutlinePersonOutline className="text-3xl text-blue-500" />{" "}
          <Link to={"/user/profile"}>
            <span className="hover:text-black/70">Tài khoản của tôi</span>
          </Link>
        </li>
        <li className="flex gap-2 items-center mt-4 ">
          <MdOutlineEventNote className="text-3xl text-blue-500" />{" "}
          <Link to={"/user/purchase"}>
            <span className="hover:text-black/70">Đơn mua</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
