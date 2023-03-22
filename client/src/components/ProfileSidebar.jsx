import {
  MdOutlinePersonOutline,
  MdOutlineEventNote,
  MdBookmark,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileSidebar = (props) => {
  const { active } = props;
  const { profile } = useSelector((state) => state.profile);
  return (
    <div className="col-span-1">
      <div className="flex gap-2">
        <figure>
          <img
            src={profile.avatar}
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
        </figure>
        <div>
          <p className="text-lg font-semibold">
            {profile.username || profile.email}
          </p>
          <span className="flex-sm text-gray-400">{profile.email}</span>
        </div>
      </div>
      <ul className="mt-8">
        <li className="flex gap-2 items-center ">
          <MdOutlinePersonOutline className="text-3xl text-blue-500" />{" "}
          <Link to={"/user/profile"}>
            <span
              className={`hover:text-black/70 ${
                active === "account" ? "text-primary" : ""
              }`}
            >
              Tài khoản của tôi
            </span>
          </Link>
        </li>
        <li className="flex gap-2 items-center mt-4 ">
          <MdOutlineEventNote className="text-3xl text-blue-500" />{" "}
          <Link to={"/user/purchase"}>
            <span
              className={`hover:text-black/70 ${
                active === "order" ? "text-primary" : ""
              }`}
            >
              Đơn mua
            </span>
          </Link>
        </li>
        <li className="flex gap-2 items-center mt-4 ">
          <MdBookmark className="text-3xl text-blue-500" />{" "}
          <Link to={"/user/bookmark"}>
            <span
              className={`hover:text-black/70 ${
                active === "bookmark" ? "text-primary" : ""
              }`}
            >
              Yêu thích
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
