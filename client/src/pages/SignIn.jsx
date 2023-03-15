import React, { useState } from "react";
import { login } from "../Api/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSumbit = async () => {
    await login({ email, password }, dispatch, navigate);
  };
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto ">
          <Header />
          <div className="my-[131px]">
            <h1 className="text-center text-xl font-bold text-black">
              ĐĂNG NHẬP
            </h1>
            <div className="w-full mt-8 px-4 py-3 md:w-1/2 mx-auto bg-gray-100 flex flex-col justify-center">
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="email"
                name="email"
                placeholder="Nhập email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <button
                onClick={handleSumbit}
                className="mt-4 px-8 py-3 bg-primary rounded-sm hover:bg-hover cursor-pointer text-white font-bold "
              >
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
