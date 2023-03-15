import axiosClient from "./axiosClient";
import { loginAction } from "../stores/authSlice";
export const login = async (user, dispatch, navigate) => {
  try {
    const data = await axiosClient.post("/auth/login", user);
    // Thêm toast
    dispatch(loginAction(data));
    navigate("/");
  } catch (error) {
    console.log(error);
    // Thêm toast
  }
};
