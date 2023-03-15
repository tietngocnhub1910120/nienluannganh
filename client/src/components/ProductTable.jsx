import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Tbody,
  Td,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getAllProduct, deleteProduct } from "../Api/productAPI";
import InstanceModal from "./modal/InstanceModal";
import FormProduct from "./FormProduct";
import VerifyModal from "./modal/VerifyModal";
const ProductTable = () => {
  const { products } = useSelector((state) => state.product);
  const [productId, setProductId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductList = async () => {
      await getAllProduct(null, dispatch);
    };
    fetchProductList();
  }, []);

  const {
    isOpen: isOpenEditProduct,
    onOpen: onOpenEditProduct,
    onClose: onCloseEditProduct,
  } = useDisclosure();
  const {
    isOpen: isOpenVerify,
    onOpen: onOpenVerify,
    onClose: onCloseVerify,
  } = useDisclosure();
  const handleRemoveProduct = async (check) => {
    if (check) {
      await deleteProduct(productId, dispatch);
    }
  };
  const handleChooseProduct = async (id) => {
    await getProduct(id, dispatch);
  };
  return (
    <>
      <TableContainer>
        <Table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <Thead className="bg-gray-50">
            <Tr>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Tên sản phẩm
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Đơn giá
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Loại sản phẩm
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Màu sắc
              </Th>
              <Th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Tùy chọn
              </Th>
            </Tr>
          </Thead>
          <Tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {products &&
              [...products].map((product) => {
                return (
                  <Tr className="hover:bg-gray-50" key={product._id}>
                    <Td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <h3 className="font-bold truncate w-40">
                        {product.title}{" "}
                      </h3>
                    </Td>
                    <Td>
                      <p>{product.price}</p>
                    </Td>
                    <Td>{product.type}</Td>
                    <Td>
                      <div className="flex gap-1">
                        {product.colors.map((color) => {
                          return (
                            <p
                              key={color}
                              className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                            >
                              {color}
                            </p>
                          );
                        })}
                      </div>
                    </Td>
                    <Td>
                      <div className="flex gap-4">
                        <DeleteIcon
                          boxSize={5}
                          onClick={() => {
                            setProductId(product._id);
                            onOpenVerify();
                          }}
                          className="cursor-pointer"
                        />
                        <EditIcon
                          boxSize={5}
                          onClick={() => {
                            handleChooseProduct(product._id);
                            onOpenEditProduct();
                          }}
                          className="cursor-pointer"
                        />
                      </div>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>

      <InstanceModal
        show={isOpenEditProduct}
        hide={onCloseEditProduct}
        modalName={"Cập nhật Sản Phẩm"}
        content={<FormProduct isEdit={true} hide={onCloseEditProduct} />}
      />
      <InstanceModal
        show={isOpenVerify}
        hide={onCloseVerify}
        modalName={"Xác Nhận"}
        content={
          <VerifyModal
            handleVerify={handleRemoveProduct}
            hide={onCloseVerify}
            title={"Xóa Sản phẩm?"}
          />
        }
      />
    </>
  );
};

export default ProductTable;
