import axiosClient from "./axiosClient";
import showToast from "./showToast";
import { updateProfileAction, getProfileAction } from "../stores/profileSlice";
import { updateAuthAction } from "../stores/authSlice";

export const updateProfile = async (payload, dispatch) => {
  try {
    const data = await axiosClient.put("/api/user/", payload);
    showToast("success", data.message);
    dispatch(updateProfileAction(data));
    dispatch(updateAuthAction(data));
    return data;
  } catch (error) {
    console.log(error);
    showToast("error", error.message);
  }
};
export const getProfile = async (dispatch) => {
  try {
    const data = await axiosClient.get("/api/user/");
    dispatch(getProfileAction(data));
  } catch (error) {
    showToast("error", error.message);
  }
};
