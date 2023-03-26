import axiosClient from "./axiosClient";
import showToast from "./showToast";
import {
  saveCartAction,
} from "../stores/userSlice";

export const getCart = async (dispatch) => {
  try {
    const data = await axiosClient.get("/api/cart");
    dispatch(saveCartAction(data.myCart));
  } catch (error) {
    showToast("error", error.message);
  }
};
// payload [quantity,color]
export const addToCart = async (dispatch, productId, payload) => {
  try {
    const data = await axiosClient.post(`/api/cart/${productId}/add`, payload);
    dispatch(saveCartAction(data.cart));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
// payload [color]
export const removeFromCart = async (dispatch, productId, payload) => {
  try {
    const data = await axiosClient.delete(
      `/api/cart/${productId}/remove`,
      payload
    );
    dispatch(saveCartAction(data.cart));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
// payload [quantity,color]
export const updateCart = async (dispatch, productId, payload) => {
  try {
    const data = await axiosClient.put(
      `/api/cart/${productId}/update`,
      payload
    );
    dispatch(saveCartAction(data.cart));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
