import axios from 'axios'
import showToast from './showToast';
export const getProvinces = async () => {
    try {
        const response = await axios.get('https://vapi.vnappmob.com/api/province/');

        return response.data.results
    } catch (error) {
        showToast('error', error.message);
    }
}
export const getDistricts = async (provideId) => {
    try {
        const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${provideId}`);

        return response.data.results
    } catch (error) {
        showToast('error', error.message);
    }
}
export const getWards = async (districtId) => {
    try {
        const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`);

        return response.data.results
    } catch (error) {
        showToast('error', error.message);
    }
}