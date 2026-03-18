/**
 * Gear Products Reducer
 * @param  {Array} state
 * @param  {Object} action
 */
const GearProductsReducer = (state = {fetching: false, data: []}, action) => {
  switch (action.type) {
    case 'REQUEST_GEAR_PRODUCTS':
      return Object.assign({}, state, {
        fetching: true,
        data: []
      });
      break;

    case 'RECEIVE_GEAR_PRODUCTS':
      return Object.assign({}, state, {
        fetching: false,
        data: action.payload
      });
      break;
    default:
      return state;
  }
};

export default GearProductsReducer