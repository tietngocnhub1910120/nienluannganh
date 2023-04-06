import axiosClient from "./axiosClient";
import showToast from "./showToast";
import { getOrdersAction, addNewOrderAction, updateOrderAction } from "../stores/orderSlice";
import { saveOrderAction, updateStatusAction } from "../stores/userSlice";

export const getAllOrder = async (dispatch, params) => {
  try {
    const data = await axiosClient.get("/api/order/", {
      params,
    });
    console.log(data);
    dispatch(getOrdersAction(data.orders));
  } catch (error) {
    showToast("error", error.message);
  }
};
export const createOrder = async (dispatch, payload) => {
  try {
    const data = await axiosClient.post("/api/order/create", payload);
    console.log(data);
    showToast("success", data.message);
    dispatch(addNewOrderAction(data));
    return data;
  } catch (error) {
    showToast("error", error.message);
  }
};

export const trackingOrder = async (orderId) => {
  try {
    const data = await axiosClient.get(`/api/order/${orderId}`);
    return data;
  } catch (error) {
    showToast("error", error.message);
  }
};
export const getUserOrder = async (dispatch, params) => {
  try {
    const data = await axiosClient.get("/api/order/private", { params });
    dispatch(saveOrderAction(data.orders))
  } catch (error) {
    showToast("error", error.message);
  }
};
export const cancelOrder = async (dispatch, orderId) => {
  try {
    const data = await axiosClient.put(`/api/order/${orderId}/cancel`);
    console.log(data);
    showToast("success", data.message);
    dispatch(updateStatusAction(orderId));
  } catch (error) {
    showToast("error", error.message);
  }
};
export const updateStatusOrder = async (dispatch, orderId, payload) => {
  try {
    const data = await axiosClient.put(`/api/order/${orderId}/update`, payload);
    console.log(data);
    showToast("success", data.message);
    dispatch(updateOrderAction({ orderId, ...payload }));
  } catch (error) {
    showToast("error", error.message);
  }
};