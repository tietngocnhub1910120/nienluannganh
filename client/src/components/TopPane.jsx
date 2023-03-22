import { useSelector } from "react-redux";
import { MdSearch } from "react-icons/md";

const TopPane = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex justify-between p-2">
      <div className="flex items-center  px-4 py-3 gap-2 rounded  w-[320px] border border-primary">
        <MdSearch className="text-2xl text-gray-500" />
        <input
          type="text"
          placeholder="Tìm kiếm...."
          className="outline-none bg-transparent w-full"
        />
      </div>
      <div className="flex items-center">
        <span className="mr-4 font-medium">{user.username}</span>
        <figure>
          <img
            src={user.avatar}
            alt=""
            className="w-11 h-11 object-cover rounded-full "
          />
        </figure>
      </div>
    </div>
  );
};

export default TopPane;
