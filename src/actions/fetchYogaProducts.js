import store from '../store'
import axios from 'axios'
/**
 * Create fetch Yoga Products Action
 */
const requestProducts = () => {
  return {
    type: 'REQUEST_YOGA_PRODUCTS'
  }
};

const receiveProducts = (data) => {
  return {
    type: 'RECEIVE_YOGA_PRODUCTS',
    payload: data
  }
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(requestProducts());
    return axios.get(`assets/resources/data/yogaProducts.json`)
      .then(json => {
        dispatch(receiveProducts(json.data));
      });
  };
};
