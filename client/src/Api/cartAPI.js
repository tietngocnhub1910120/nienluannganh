import axiosClient from "./axiosClient";
import showToast from "./showToast";
import { getCartsAction } from "../stores/cartSlice";

export const getAllProduct = async (dispatch, params) => {
  try {
    const data = await axiosClient.get("/api/cart", {
      params,
    });
    dispatch(getCartsAction(data));
  } catch (error) {
    showToast("error", error.message);
  }
};
