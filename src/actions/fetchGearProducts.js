import store from '../store'
import axios from 'axios'
/**
 * Create fetch Gear Products Action
 */
const requestProducts = () => {
  return {
    type: 'REQUEST_GEAR_PRODUCTS'
  }
};

const receiveProducts = (data) => {
  return {
    type: 'RECEIVE_GEAR_PRODUCTS',
    payload: data
  }
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(requestProducts());
    return axios.get(`assets/resources/data/gearProducts.json`)
      .then(json => {
        dispatch(receiveProducts(json.data));
      });
  };
};
