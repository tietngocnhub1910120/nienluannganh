import axiosClient from "./axiosClient";
import showToast from "./showToast";
import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
  getCartAction,
} from "../stores/userSlice";

export const getCart = async (dispatch) => {
  try {
    const data = await axiosClient.get("/api/cart");
    console.log(data);
    dispatch(getCartAction(data.myCart));
  } catch (error) {
    showToast("error", error.message);
  }
};
// payload [quantity,color]
export const addToCart = async (dispatch, productId, payload) => {
  try {
    const data = await axiosClient.post(`/api/cart/${productId}/add`, payload);
    console.log(data);
    showToast("success", data.message);
    dispatch(addToCartAction(data.cart));
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
    console.log(data);
    showToast("success", data.message);
    // dispatch(removeFromCart(data));
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
    console.log(data);
    // dispatch(updateCart(data));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
