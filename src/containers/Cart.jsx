import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchProducts } from '../actions/fetchProducts'
import { fetchCart } from '../actions/fetchCart'
import { removeFromCart } from '../actions/removeFromCart'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

/**
 * Create Cart Container
 */
class Cart extends Component {
  getItemById(id) {
    let obj = {};
    this.props.products.map((item) => {
      if (item.id == id) obj = item
    });
    return obj;
  }

  handleTrash(key) {
    const { dispatch } = this.props;
    dispatch(removeFromCart(key))
  }

  totalPricesArray() {
    let cartItems = this.props.cart;
    let getPricesById = (id) => {
      return this.getItemById(id).price
    };
    let prices = [];
    Object.keys(this.props.cart).map(function (key) {
      prices.push(getPricesById(cartItems[key].id))
    });
    return prices;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
    dispatch(fetchCart());
    
  }



  render() {
    let total = this.totalPricesArray().reduce(function (prev, next) {
      return prev + next;
    }, 0);

    let handleCheckoutClick = () => {

  window.digitalData = {};

  window.digitalData = {
    event: "checkout_button_click",
    page: {
      pageTitle: "Checkout",
      url: window.location.href,
      siteSection: "Purchase"
    },
    cart: {
      total: total,
      itemCount: Object.keys(this.props.cart).length
    }
  };
  
  console.log(`[Cart] digitalData updated:`, window.digitalData);
};

let checkoutButton = total > 0 ? (
  <Link 
    to="/checkout" 
    className="button btn-margin is-success" 
    onClick={(e) => {
      handleCheckoutClick();
      this.props.closePopover();
    }}
  >
    CHECKOUT
  </Link>
) : "";


    return (
      <div>
        <Helmet>
        <title>My Cart</title>

        </Helmet>

        <section className="section">
          <div className="container">
            <table className="table">
              <thead>
              <tr>
                <th><abbr>ID</abbr></th>
                <th><abbr>Title</abbr></th>
                <th>Price</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tfoot>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Total: ${total}</th>
                <th>&nbsp;</th>
              </tr>
              </tfoot>
              <tbody>
              {
                Object.keys(this.props.cart).map((key) => {
                  return (<CartItem key={key} productKey={key} handleTrash={this.handleTrash.bind(this)}
                                    product={this.getItemById(this.props.cart[key].id)}/>)
                })
              }
              </tbody>
            </table>
            {checkoutButton}
          </div>
        </section>
      </div>
    )
  }
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
  return {
    cart: state.CartReducer.data,
    products: state.ProductsReducer.data
  }
};

export default connect(stateProps)(Cart)
