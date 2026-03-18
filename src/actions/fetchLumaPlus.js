import store from '../store'
import axios from '../utils/mockAxios.js'
/**
 * Create fetch Luma+ Content Action
 */
const requestPosts = () => {
  return {
    type: 'REQUEST_LUMA_PLUS'
  }
};

const receiveLumaPlus = (data) => {
  return {
    type: 'RECEIVE_LUMA_PLUS',
    payload: data
  }
};

export const fetchLumaPlus = () => {
  return dispatch => {
    dispatch(requestPosts());
    return axios.get('https://teehuggers.com/web/pages/lumaplus.json')
      .then(response => response)
      .then(json => {
        dispatch(receiveLumaPlus(json.data))
      });
  }
};
