import axiosClient from "./axiosClient";
import showToast from "./showToast";
import {
  getProductsAction,
  getProductAction,
  removeProductAction,
  addProductAction,
} from "../stores/productSlice";

export const getAllProduct = async (filter = {}, dispatch) => {
  try {
    const data = await axiosClient.get("/api/product", {
      filter,
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
