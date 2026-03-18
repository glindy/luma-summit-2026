/**
 * Luma + Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const LumaPlusReducer = (state = {fetching: false, data: {title: '', content: ''}}, action) => {
  switch (action.type) {
    case 'REQUEST_LUMA_PLUS':
      return Object.assign({}, state, {
        fetching: true,
        data: {title: '', content: ''}
      });
      break;
    case 'RECEIVE_LUMA_PLUS':
      return Object.assign({}, state, {
        fetching: false,
        data: action.payload
      });
      break;
    default:
      return state
  }
};
export default LumaPlusReducer