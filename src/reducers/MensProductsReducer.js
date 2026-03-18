/**
 * Mens Products Reducer
 * @param  {Array} state
 * @param  {Object} action
 */
const MensProductsReducer = (state = {fetching: false, data: []}, action) => {
  switch (action.type) {
    case 'REQUEST_MENS_PRODUCTS':
      return Object.assign({}, state, {
        fetching: true,
        data: []
      });
      break;

    case 'RECEIVE_MENS_PRODUCTS':
      return Object.assign({}, state, {
        fetching: false,
        data: action.payload
      });
      break;
    default:
      return state;
  }
};

export default MensProductsReducer