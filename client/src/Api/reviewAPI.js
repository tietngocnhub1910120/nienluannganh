import axiosClient from "./axiosClient";
import showToast from "./showToast";
import { addReviewAction, deleteReviewAction, getReviewsAction, editReviewAction } from '../stores/productSlice';

export const postReview = async (dispatch, payload, productId) => {
    try {
        const data = await axiosClient.post(`/api/review/${productId}`, payload);
        console.log(data);
        dispatch(addReviewAction(data.review))
    } catch (error) {
        showToast('error', error.message);
    }
}
export const getReviews = async (dispatch, productId) => {
    try {
        const data = await axiosClient.get(`/api/review/${productId}`);
        dispatch(getReviewsAction(data.reviews))
    } catch (error) {
        showToast('error', error.message);
    }
}
export const removeReview = async (dispatch, reviewId) => {
    try {
        const data = await axiosClient.delete(`/api/review/${reviewId}`);
        dispatch(deleteReviewAction(reviewId))
        showToast('success', data.message);
    } catch (error) {
        showToast('error', error.message);
    }
}
export const editReview = async (dispatch, payload, reviewId) => {
    console.log(payload);
    try {
        const data = await axiosClient.put(`/api/review/${reviewId}`, payload);
        console.log(data);
        dispatch(editReviewAction({ ...data.updatedReview, reviewId }))
        showToast('success', data.message);
    } catch (error) {
        showToast('error', error.message);
    }
}