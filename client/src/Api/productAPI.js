import axiosClient from "./axiosClient";
import showToast from "./showToast";
import {
  getProductsAction,
  getProductAction,
  removeProductAction,
  addProductAction,
} from "../stores/productSlice";

export const getAllProduct = async (dispatch, params) => {
  try {
    const data = await axiosClient.get("/api/product", {
      params,
    });
    dispatch(getProductsAction(data));
  } catch (error) {
    showToast("error", error.message);
  }
};
export const getProduct = async (id, dispatch) => {
  try {
    const data = await axiosClient.get(`/api/product/${id}`);
    console.log(data);
    dispatch(getProductAction(data));
  } catch (error) {
    showToast("error", error.message);
  }
};
export const deleteProduct = async (id, dispatch) => {
  try {
    const data = await axiosClient.delete(`/api/product/${id}/delete`);
    dispatch(removeProductAction(id));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
export const createNewProduct = async (payload, dispatch) => {
  try {
    const data = await axiosClient.post("/api/product/create", payload);
    dispatch(addProductAction(data));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
export const editProduct = async (payload, id, dispatch) => {
  try {
    const data = await axiosClient.put(`/api/product/${id}/edit`, payload);
    // dispatch(addProductAction(data));
    showToast("success", data.message);
  } catch (error) {
    showToast("error", error.message);
  }
};
export const searchProducts = async (dispatch, params) => {
  console.log(params);
  try {
    const data = await axiosClient.get("/api/product", {
      params,
    });
    return data.products
  } catch (error) {
    showToast("error", error.message);
  }
};