import NavAdmin from "../components/NavAdmin";
import FormProduct from "../components/Form/FormProduct";
import TopPane from "../components/TopPane";
const AddProduct = () => {
  return (
    <div className="xl:container mx-auto mt-24 shadow-xl">
      <div className="flex">
        <div className="w-[25%] min-h-[80vh] ">
          <NavAdmin navActive={"add"} />
        </div>
        <div className="flex-1">
          <TopPane />
          <div className="w-full">
            <FormProduct isEdit={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
