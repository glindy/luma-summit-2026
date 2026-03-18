import store from '../store'
import axios from 'axios'
/**
 * Create Men's products fetch Action
 */
const requestProducts = () => {
  return {
    type: 'REQUEST_MENS_PRODUCTS'
  }
};

const receiveProducts = (data) => {
  return {
    type: 'RECEIVE_MENS_PRODUCTS',
    payload: data
  }
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(requestProducts());
    return axios.get(`assets/resources/data/mensProducts.json`)
      .then(json => {
        dispatch(receiveProducts(json.data));
      });
  };
};
