import axiosClient from "./axiosClient";
import showToast from "./showToast";
import { saveAuthAction, logoutAction } from "../stores/authSlice";
export const login = async (user, dispatch) => {
  try {
    const data = await axiosClient.post("/api/auth/login", user);
    showToast("success", data.message);
    dispatch(saveAuthAction(data));
    return data;
  } catch (error) {
    showToast("error", error.message);
  }
};
export const register = async (payload, dispatch) => {
  try {
    const data = await axiosClient.post("/api/auth/register", payload);
    showToast("success", data.message);
    dispatch(saveAuthAction(data));
    return data;
  } catch (error) {
    showToast("error", error.message);
  }
};
export const logout = async (dispatch) => {
  try {
    showToast("success", "Đăng xuất thành công!");
    dispatch(logoutAction());
  } catch (error) {
    showToast("error", error.message);
  }
};
