import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { login } from "../Api/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignIn = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .required("Vui lòng nhập email")
          .email("email không hợp lệ"),
        password: Yup.string().required("Vui lòng nhập password"),
      }),
      onSubmit: async (values) => {
        console.log(values);
        handleSignIn(values);
      },
    });

  const handleSignIn = async (values) => {
    const { user } = await login(values, dispatch);
    user.admin ? navigate("/manage") : navigate("/");
  };

  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto ">
          <Header />
          <div className="my-[130px]">
            <h1 className="text-center text-xl font-bold text-black">
              ĐĂNG NHẬP
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
                  placeholder="Email"
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
                isInvalid={errors.password && touched.password}
              >
                <FormLabel>Mật khẩu</FormLabel>
                <Input
                  placeholder="Mật khẩu"
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

              <button className="mt-4 px-8 py-3 bg-primary rounded-sm hover:bg-hover cursor-pointer text-white font-bold ">
                ĐĂNG NHẬP
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
