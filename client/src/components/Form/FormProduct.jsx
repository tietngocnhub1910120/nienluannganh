import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import EditorQuill from "../Editor/EditorQuill";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../../Api/productAPI";
function FormProduct(props) {
  const { isEdit, hide } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { product } = useSelector((state) => state.product);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState([]);
  const dispatch = useDispatch();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      type: "",
      colors: "",
      price: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required("Vui lòng nhập tên sản phẩm")
        .min(10, "Ít nhất có 10 kí tự")
        .max(155, "Tối đa 155 kí tự"),
      type: Yup.string().required("Vui lòng nhập chọn loại sản phẩm"),
      colors: Yup.string().required("Vui lòng nhập màu sản phẩm"),
      price: Yup.number().required("Vui lòng nhập giá sản phẩm"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", description);
      formData.append("price", values.price);
      formData.append("type", values.type);
      formData.append("colors", values.colors);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      if (!isEdit) {
        await createNewProduct(formData, dispatch);
      }
      setIsLoading(false);

      resetForm();
      setDescription("");
      setImages([]);
    },
  });
  const handleEditor = (newContent) => {
    setDescription(newContent);
  };
  const handleChangeImage = (e) => {
    if (e.target.files && [...e.target.files].length > 0) {
      setImages(e.target.files);
    }
  };
  const options = ["Chair", "Table"]

  useEffect(() => {
    if (isEdit) {
      setFieldValue("title", product.title);
      setFieldValue("price", product.price);
      setFieldValue("colors", product.colors);
      setFieldValue("type", product.type);
      setDescription(product.description);
      setPreview(product.urlImages);
    }
  }, [product]);
  return (
    <>
      <h4 className="text-2xl font-bold text-center">
        {isEdit ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}
      </h4>
      <form className="px-4 py-8" onSubmit={handleSubmit}>
        <FormControl className="mt-2" isInvalid={errors.title && touched.title}>
          <FormLabel>Tên sản phẩm</FormLabel>
          <Input
            placeholder="Tên sản phẩm"
            name="title"
            value={values.title || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title && (
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl className="mt-2">
          <FormLabel>Mô tả sản phẩm</FormLabel>
          <EditorQuill
            content={description}
            handleChangeEditor={handleEditor}
          />
        </FormControl>
        <FormControl className="mt-2" isInvalid={errors.price && touched.price}>
          <FormLabel>Giá sản phẩm</FormLabel>
          <Input
            placeholder="Giá sản phẩm"
            name="price"
            value={values.price || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && touched.price && (
            <FormErrorMessage>{errors.price}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          className="mt-2"
          isInvalid={errors.colors && touched.colors}
        >
          <FormLabel>Màu sản phẩm</FormLabel>
          <Input
            placeholder="Màu sản phẩm vd : Nâu,Trắng,..."
            name="colors"
            value={values.colors || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.colors && touched.colors && (
            <FormErrorMessage>{errors.colors}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl className="mt-2" isInvalid={errors.type && touched.type}>
          <FormLabel>Loại sản phẩm</FormLabel>
          <Select
            placeholder={"Loại sản phẩm"}
            name="type"
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {options.map((op, index) => {
              return (
                <option key={index} value={op}>
                  {op === 'Table' ? 'Bàn' : 'Ghế'}
                </option>

              );
            })}
          </Select>
          {errors.type && touched.type && (
            <FormErrorMessage>{errors.type}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl className="mt-2">
          <FormLabel>Hình ảnh sản phẩm</FormLabel>
          <input
            name="images"
            type="file"
            multiple
            onChange={handleChangeImage}
          />
        </FormControl>
        {isEdit && (
          <div className="flex gap-2">
            {preview &&
              preview.map((url, index) => {
                return <img className="w-20" src={url} alt="" key={index} />;
              })}
          </div>
        )}
        <div className="flex gap-2 mt-4">
          <Button type="submit" colorScheme={"green"} isLoading={isLoading}>
            {isEdit ? "Cập nhật" : "Thêm"}
          </Button>
          {isEdit ? <Button onClick={hide}>Hủy</Button> : null}
        </div>
      </form>
    </>
  );
}

export default FormProduct;
