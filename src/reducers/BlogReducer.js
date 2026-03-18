/**
 * Blog Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const BlogReducer = (state = {fetching: false, data: {title: '', content: ''}}, action) => {
  switch (action.type) {
    case 'REQUEST_BLOG':
      return Object.assign({}, state, {
        fetching: true,
        data: {title: '', content: ''}
      });
      break;
    case 'RECEIVE_BLOG':
      return Object.assign({}, state, {
        fetching: false,
        data: action.payload
      });
      break;
    default:
      return state
  }
};
export default BlogReducer