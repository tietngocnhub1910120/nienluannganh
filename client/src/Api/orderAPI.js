import axiosClient from "./axiosClient";
import showToast from "./showToast";
import { getOrdersAction } from "../stores/orderSlice";

export const getAllProduct = async (dispatch, params) => {
  try {
    const data = await axiosClient.get("/api/order", {
      params,
    });
    dispatch(getOrdersAction(data));
  } catch (error) {
    showToast("error", error.message);
  }
};
export const createOrder = async (dispatch, payload) => {
  try {
    const data = await axiosClient.post("/api/order/create", payload);
    console.log(data);
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};