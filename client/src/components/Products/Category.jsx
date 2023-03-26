const Category = (props) => {
  const { filters, setFilters } = props;
  const handleSelectType = (value) => {
    setFilters({ ...filters, type: value });
  };
  return (
    <div>
      <h2 className="text-lg font-semibold">DANH MỤC</h2>
      <ul className="">
        <li
          onClick={() => {
            handleSelectType("");
          }}
          className={`cursor-pointer py-2 px-1 hover:text-black duration-300 ease-linear  ${
            filters?.type === "" ? "bg-primary text-white" : ""
          }`}
        >
          <span className="text-base font-semibold">Tất cả sản phẩm</span>
        </li>
        <li
          onClick={() => {
            handleSelectType("Table");
          }}
          className={`cursor-pointer py-2 px-1 hover:text-black duration-300 ease-linear  ${
            filters?.type === "Table" ? "bg-primary text-white" : ""
          }`}
        >
          <span className="text-base font-semibold">Bàn</span>
        </li>
        <li
          onClick={() => {
            handleSelectType("Chair");
          }}
          className={`cursor-pointer py-2 px-1 hover:text-black duration-300 ease-linear  ${
            filters?.type === "Chair" ? "bg-primary text-white" : ""
          }`}
        >
          <span className="text-base font-semibold">Ghế</span>
        </li>
      </ul>
    </div>
  );
};

export default Category;
