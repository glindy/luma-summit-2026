import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ProductsReducer from './ProductsReducer'
import LatestProductsReducer from './LatestProductsReducer'
import MensProductsReducer from './MensProductsReducer'
import WomensProductsReducer from './WomensProductsReducer'
import GearProductsReducer from './GearProductsReducer'
import YogaProductsReducer from './YogaProductsReducer'
import BlogReducer from './BlogReducer'
import LumaPlusReducer from './LumaPlusReducer'
import ProductReducer from './ProductReducer'
import LoadingReducer from './LoadingReducer'
import CartReducer from './CartReducer'
import WishlistReducer from './WishlistReducer'
import { routerReducer } from 'react-router-redux'

/**
 * Combine Reducers In One Object
 */
export default combineReducers({
  AboutReducer,
  ProductsReducer,
  LatestProductsReducer,
  MensProductsReducer,
  WomensProductsReducer,
  GearProductsReducer,
  YogaProductsReducer,
  BlogReducer,
  LumaPlusReducer,
  ProductReducer,
  LoadingReducer,
  CartReducer,
  WishlistReducer,
  routing: routerReducer
})
