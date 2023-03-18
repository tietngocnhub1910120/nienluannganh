import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateProfile } from "../Api/profileAPI";
const ProfileForm = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [previewAvatar, setPreviewAvatar] = useState("");
  const [avatar, setAvatar] = useState(null);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("email không hợp lệ"),
      username: Yup.string(),
      phone: Yup.string().matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
        "số điện thoại không hợp lệ"
      ),
      address: Yup.string(),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("username", values.username);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("avatar", avatar);
      handleUpdateProfile(formData);
    },
  });

  const handleUpdateProfile = async (values) => {
    await updateProfile(values, dispatch);
  };
  const handleAvatar = (e) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (profile) {
      setValues({
        email: profile.email,
        address: profile.address,
        phone: profile.phone,
        username: profile.username,
      });
      setPreviewAvatar(profile.avatar);
    }
  }, [profile]);
  useEffect(() => {
    if (!avatar) {
      return;
    }
    const url = URL.createObjectURL(avatar);
    setPreviewAvatar(url);
    return () => URL.revokeObjectURL(url);
  }, [avatar]);
  return (
    <div className="grid grid-cols-4">
      <form className="col-span-3 mx-6" onSubmit={handleSubmit}>
        <FormControl className="mt-8" isInvalid={errors.email && touched.email}>
          <div className="flex items-center">
            <FormLabel className="w-1/6">Email</FormLabel>
            <Input
              className="w-5/6"
              placeholder="nhập email"
              name="email"
              value={values.email || ""}
              disabled
            />
          </div>
          {errors.email && touched.email && (
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          className="mt-8"
          isInvalid={errors.username && touched.username}
        >
          <div className="flex items-center">
            <FormLabel className="w-1/6">Tên:</FormLabel>
            <Input
              className="w-5/6"
              placeholder="nhập tên của bạn"
              name="username"
              value={values.username || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.username && touched.username && (
            <FormErrorMessage>{errors.username}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl className="mt-8" isInvalid={errors.phone && touched.phone}>
          <div className="flex items-center">
            <FormLabel className="w-1/6">số điện thoại</FormLabel>
            <Input
              className="w-5/6"
              placeholder="nhập số điện thoại"
              name="phone"
              value={values.phone || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.phone && touched.phone && (
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          className="mt-8"
          isInvalid={errors.address && touched.address}
        >
          <div className="flex items-center">
            <FormLabel className="w-1/6">Địa chỉ:</FormLabel>
            <Input
              className="w-5/6"
              placeholder="nhập địa chỉ"
              name="address"
              value={values.address || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.address && touched.address && (
            <FormErrorMessage>{errors.address}</FormErrorMessage>
          )}
        </FormControl>
        <button
          type="submit"
          className="mt-8 px-4 py-3 bg-primary rounded text-white font-semibold hover:bg-hover"
        >
          Lưu
        </button>
      </form>
      <div className="col-span-1">
        <div className="flex flex-col items-center">
          <figure>
            <img
              src={previewAvatar}
              alt=""
              className="w-28 h-28 object-cover rounded-full"
            />
          </figure>
          <div className="mt-4 text-center">
            <label
              htmlFor="avatar"
              className="px-4 py-3 bg-gray-200 shadow-md text-gray-500 rounded cursor-pointer fo"
            >
              Chọn Ảnh
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="hidden"
              onChange={handleAvatar}
            />
            <p className="mt-4 text-gray-500">
              Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
