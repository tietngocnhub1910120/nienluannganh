import { MdOutlineArrowDropDown } from "react-icons/md";

const Category = () => {
  return (
    <div>
      <h2 className="text-base font-semibold">DANH MỤC</h2>
      <ul className="ml-6">
        <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
          <span className="text-sm">Bàn</span>
        </li>
        <li className="flex justify-between items-center hover:text-primary duration-300 ease-linear my-6">
          <span className="text-sm ">Ghế</span>
        </li>
      </ul>
    </div>
  );
};

export default Category;
