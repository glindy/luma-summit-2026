import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' //added this
import Helmet from "react-helmet"
import { fetchProducts } from '../actions/fetchProducts'
import { fetchCart } from '../actions/fetchCart'
import { Link } from 'react-router'
import {deleteCart} from '../actions/deleteCart'

const DELIVERY_PREFERENCES = {
  NORMAL: {
    value: 'normal',
    amount: 0
  },
  EXPRESS: {
    value: 'express',
    amount: 12.34
  }
};

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onDeliveryPreferenceChanged = this.onDeliveryPreferenceChanged.bind(this);
    this.state = {
      deliveryPreference: DELIVERY_PREFERENCES.NORMAL
    };
  }

  onDeliveryPreferenceChanged(evt) {
    const selectedPreferenceValue = evt.target.value,
     preferenceKey = Object.keys(DELIVERY_PREFERENCES).filter(key => DELIVERY_PREFERENCES[key].value === selectedPreferenceValue);

    this.setState({deliveryPreference: DELIVERY_PREFERENCES[preferenceKey]});
    this.targetView('DELIVERY-' + selectedPreferenceValue);
  }

 

  handleClick(event) {
    this.props.dispatch(deleteCart());
    this.props.history.push('/confirm');


    let totalRevenue = this.totalPricesArray().reduce(function (prev, next) {
      return prev + next;
    }, 0);

  window.digitalData = {};

  window.digitalData = {
    event: "purchase",
    page: {
      pageTitle: "Order Confirmation",
      url: window.location.href,
      siteSection: "Purchase"
    },
    order: {
      totalRevenue: totalRevenue,
      totalUnits: Object.keys(this.props.cart).length
    }
  };
  
  console.log(`[Checkout] digitalData updated:`, window.digitalData);
  }

  getItemById(id) {
    let obj = {};
    this.props.products.map((item) => {
      if (item.id == id) obj = item
    });
    return obj
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
    return prices
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
    dispatch(fetchCart())
  }

  render() {
    let total = this.totalPricesArray().reduce(function (prev, next) {
      return prev + next;
    }, 0);

    let deliveryCharges = this.state.deliveryPreference ? this.state.deliveryPreference.amount : 0;

    total += deliveryCharges;

    let formStyle = {'verticalAlign': 'top', 'display': 'inline-block'};


    return (
      <div>
        <Helmet> 
          <title>Checkout</title>
        </Helmet>
        
        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">CHECKOUT</h1>
            </div>
            <form className="col-md-8" style={formStyle}>
              <h2><span className="badge badge-clear">SHIPPING INFORMATION</span></h2>

              <div className="form-row">
                <div className="col-md-4 mb-2">
                  <label >FIRST NAME </label>
                  <input type="text" className="form-control" id="firstname" placeholder="First name"
                         defaultValue="Stephanie" required/>
                </div>
                <div className="col-md-4 mb-2">
                  <label >LAST NAME </label>
                  <input type="text" className="form-control" id="lastname" placeholder="Last name" defaultValue="Burton"
                         required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 mb-3">
                  <label >ADDRESS 1 </label>
                  <input type="text" className="form-control" id="address1" defaultValue="123 Main Street"
                         placeholder="Address 1" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 mb-3">
                  <label >ADDRESS 2 </label>
                  <input type="text" className="form-control" id="address2" defaultValue="#1234" placeholder="Address 2"
                         required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-2 mb-3">
                  <label >CITY </label>
                  <input type="text" className="form-control" id="city" defaultValue="New York" placeholder="City"
                         required/>
                </div>
                <div className="col-md-2 mb-3">
                  <label >STATE</label>
                  <input type="text" className="form-control" id="state" defaultValue="NY" placeholder="State"
                         required/>
                </div>
                <div className="col-md-2 mb-3">
                  <label >ZIP </label>
                  <input type="text" className="form-control" id="zip" defaultValue="10001" placeholder="Zip" required/>
                </div>
                <div className="col-md-2 mb-3">
                  <label >COUNTRY </label>
                  <input type="text" className="form-control" id="country" defaultValue="USA" placeholder="Country"
                         required/>
                </div>
              </div>
              <h2><span className="badge badge-clear">CREDIT CARD INFORMATION</span></h2>

              <div className="form-row">
                <div className="col-md-4 mb-2">
                  <label >FIRST NAME </label>
                  <input type="text" className="form-control" id="cfirstname" placeholder="First name"
                         defaultValue="Mark" required/>
                </div>
                <div className="col-md-4 mb-2">
                  <label >LAST NAME </label>
                  <input type="text" className="form-control" id="clastname" placeholder="Last name" defaultValue="Otto"
                         required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-2 mb-3">
                  <label >CARD TYPE </label>
                  <select className="form-control" id="ct">
                    <option>VISA</option>
                    <option>MASTERCARD</option>
                    <option>AMEX</option>
                    <option>GIFT CARD</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label >CARD NUMBER </label>
                  <input type="text" className="form-control" id="cc" defaultValue="5500 0000 0000 0004"
                         placeholder="Credit Card Number" required/>
                </div>
                <div className="col-md-2 mb-2">
                  <label >EXPIRATION</label>
                  <input type="text" className="form-control" id="CVV" defaultValue="1234" placeholder="CVV" required/>
                </div>
              </div>
              <h2><span className="badge badge-clear">BILLING INFORMATION</span></h2>

              <div className="form-row">
                <div className="col-md-4 mb-2">
                  <label >FIRST NAME </label>
                  <input type="text" className="form-control" id="bfirstname" placeholder="First name"
                         defaultValue="Mark" required/>
                </div>
                <div className="col-md-4 mb-2">
                  <label >LAST NAME </label>
                  <input type="text" className="form-control" id="blastname" placeholder="Last name" defaultValue="Otto"
                         required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 mb-3">
                  <label >ADDRESS 1 </label>
                  <input type="text" className="form-control" id="baddress1" defaultValue="123 Main Street"
                         placeholder="Address 1" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 mb-3">
                  <label >ADDRESS 2 </label>
                  <input type="text" className="form-control" id="baddress2" defaultValue="#1234"
                         placeholder="Address 2" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-2 mb-3">
                  <label >CITY </label>
                  <input type="text" className="form-control" id="bcity" defaultValue="New York" placeholder="City"
                         required/>
                </div>
                <div className="col-md-2 mb-3">
                  <label >STATE</label>
                  <input type="text" className="form-control" id="bstate" defaultValue="NY" placeholder="State"
                         required/>
                </div>
                <div className="col-md-2 mb-3">
                  <label >ZIP </label>
                  <input type="text" className="form-control" id="bzip" defaultValue="10001" placeholder="Zip"
                         required/>
                </div>
                <div className="col-md-2 mb-3">
                  <label >COUNTRY </label>
                  <input type="text" className="form-control" id="bcountry" defaultValue="USA" placeholder="Country"
                         required/>
                </div>
              </div>
            </form>
            <form className="col-md-4" style={formStyle}>
              <h2><span className="badge badge-clear">DELIVERY PREFERENCES</span></h2>

              <div onChange={this.onDeliveryPreferenceChanged}>
                <div className="mb-3">
                  <label>
                    <input type="radio" id="normal" name="deliveryPreference" value={DELIVERY_PREFERENCES.NORMAL.value}
                           defaultChecked={true}/>
                    <span>    STANDARD (7-10 BUSINESS DAYS)</span>
                  </label>
                </div>

                <div className="mb-3">
                  <label>
                    <input type="radio" id="express" name="deliveryPreference"
                           value={DELIVERY_PREFERENCES.EXPRESS.value}/>
                    <span>    EXPRESS* (2-3 BUSINESS DAYS)</span>
                  </label>
                </div>

                {deliveryCharges > 0 && (
                  <div className="mb-3">
                    *WE CHARGE AN ADDITIONAL FEE OF ${deliveryCharges} FOR EXPRESS.
                  </div>
                )}

              </div>

              <div className="form-group">
                <button type="button" className="button btn-margin is-success btn-lg-pay" onClick={this.handleClick}>
                  SUBMIT ORDER FOR  <span className="badge badge-clear-price">${total}</span> 
                </button>
              </div>
            </form>
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

export default connect(stateProps)(Checkout)
