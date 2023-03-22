import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Api/authAPI";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        phone: "",
        email: "",
        password: "",
        comfirmPassword: "",
      },
      validationSchema: Yup.object().shape({
        username: Yup.string().required("Vui lòng nhập username"),
        email: Yup.string()
          .required("Vui lòng nhập email")
          .email("email không hợp lệ"),
        password: Yup.string().required("Vui lòng nhập password"),
        phone: Yup.string().matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "số điện thoại không hợp lệ"
        ),
        comfirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
          .required("Vui lòng nhập password xác nhận"),
      }),
      onSubmit: async (values) => {
        handleSignUp(values);
      },
    });

  const handleSignUp = async (values) => {
    const { success } = await register(values, dispatch);
    if (success) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto">
          <Header />
          <div className="my-[57px]">
            <h1 className="text-center text-xl font-bold text-black">
              TẠO TÀI KHOẢN
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full mt-8 px-4 py-3 md:w-1/2 mx-auto bg-gray-100 flex flex-col justify-center"
            >
              <FormControl
                className="mt-2"
                isInvalid={errors.email && touched.email}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="nhập email"
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                className="mt-2"
                isInvalid={errors.username && touched.username}
              >
                <FormLabel>username</FormLabel>
                <Input
                  placeholder="ex: user012, deptrainhatsom"
                  name="username"
                  value={values.username || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && (
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                className="mt-2"
                isInvalid={errors.phone && touched.phone}
              >
                <FormLabel>phone</FormLabel>
                <Input
                  placeholder="nhập số điện thoại"
                  name="phone"
                  value={values.phone || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone && (
                  <FormErrorMessage>{errors.phone}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                className="mt-2"
                isInvalid={errors.password && touched.password}
              >
                <FormLabel>Mật khẩu</FormLabel>
                <Input
                  placeholder="nhập mật khẩu"
                  type="password"
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                className="mt-2"
                isInvalid={errors.comfirmPassword && touched.comfirmPassword}
              >
                <FormLabel>Xác nhận mật khẩu</FormLabel>
                <Input
                  placeholder="nhập mật khẩu xác nhận"
                  type="password"
                  name="comfirmPassword"
                  value={values.comfirmPassword || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.comfirmPassword && touched.comfirmPassword && (
                  <FormErrorMessage>{errors.comfirmPassword}</FormErrorMessage>
                )}
              </FormControl>

              <button className="mt-4 px-8 py-3 bg-primary rounded-sm hover:bg-hover cursor-pointer text-white font-bold ">
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
