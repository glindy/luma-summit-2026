import store from '../store'
import axios from '../utils/mockAxios.js'
/**
 * Create fetchBlog Action
 */
const requestPosts = () => {
  return {
    type: 'REQUEST_BLOG'
  }
};

const receiveBlog = (data) => {
  return {
    type: 'RECEIVE_BLOG',
    payload: data
  }
};

export const fetchBlog = () => {
  return dispatch => {
    dispatch(requestPosts());
    return axios.get('https://teehuggers.com/web/pages/blog.json')
      .then(response => response)
      .then(json => {
        dispatch(receiveBlog(json.data))
      });
  }
};
