import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchProduct } from '../actions/fetchProduct'
import { addToCart } from '../actions/addToCart'
import { addToWishlist } from '../actions/addToWishlist'
import { removeFromWishlist } from '../actions/removeFromWishlist'
import { removeFromCart } from '../actions/removeFromCart'
// import targetHelpers from '../utils/targetHelpers' // me 2/28

/**
 * Create SingleProduct Container
 */
class SingleProduct extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProduct(this.props.match.params.id));
       //targetHelpers.setItemCategory();
       //targetHelpers.targetGetOffers();
  }
    
  checkWishlist(id) {
    let check = null;
    Object.keys(this.props.wishlist).map((key) => {
      if (this.props.wishlist[key].id == id) check = true
    });
    return check
  }

  checkCart(id) {
    let check = null;
    Object.keys(this.props.cart).map((key) => {
      if (this.props.cart[key].id == id) check = true
    });
    return check
  }

  getKeyByIdForWl(id) {
    let productKey = '';
    Object.keys(this.props.wishlist).map((key) => {
      if (this.props.wishlist[key].id == id) productKey = key
    });
    return productKey
  }

  getKeyByIdForCart(id) {
    let productKey = '';
    Object.keys(this.props.cart).map((key) => {
      if (this.props.cart[key].id == id) productKey = key
    });
    return productKey
  }

  componentDidUpdate(prevProps) {
  if (prevProps.product !== this.props.product && this.props.product.id) {
    console.log("[SingleProduct] Product data updated, tracking page view");
    window.dispatchEvent(new Event("productDataLoaded"));
  }
}


  render() {

    //const { product } = this.props;

    return (
      <div key="ProductViewPage">
        
      <Helmet>
          <title>{this.props.product.title}</title>
          <meta name="site_section" content="Product Detail Page" />
          <meta name="product_category" content={this.props.product.category || ''} />
          <meta name="product_sku" content={this.props.product.sku || ''} />
          <meta name="product_name" content={this.props.product.title || ''} />
          <meta name="product_price" content={this.props.product.price || ''} />
  
          
        </Helmet>


        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <img src={this.props.product.image} width="100%"/>
              </div>

              <div className="column is-half">
                <h1 className="title">{this.props.product.title}</h1>

                <h3><b>Price: ${this.props.product.price}</b></h3>
                <br />

                <p>{this.props.product.description}</p>
                <button data-track-action='link-click' data-track="analytics"
                        data-link-name={`${(this.checkCart(this.props.product.id)) ? 'remove-from-cart' : 'add-to-cart'}`}

                        data-category={this.props.product.category}  // ✅ Add category
                        data-sku={this.props.product.sku}  // ✅ Add SKU
                        data-title={this.props.product.title}  // ✅ Add title
                      data-price={this.props.product.price}  // ✅ Add price

                        className={`button btn-margin ${(this.checkCart(this.props.product.id)) ? 'is-info' : 'is-success'}`}
                        onClick={(event) => {
                          event.stopPropagation(); // ✅ prevents bubbling => event firing multiple times
                          console.log("[React] onClick fired");

                    							(this.checkCart(this.props.product.id)) ?
                    								this.props.dispatch(removeFromCart(this.getKeyByIdForCart(this.props.product.id), event.target)) :
                    								this.props.dispatch(addToCart(this.props.product.id, event.target))
                    						}
                    						}>
                  {`${(this.checkCart(this.props.product.id)) ? 'REMOVE FROM CART' : 'ADD TO CART'}`}
                </button>
                <button data-track-action='link-click' data-track='analytics'
                        data-link-name={`${(this.checkWishlist(this.props.product.id)) ? 'remove-from-wishlist' : 'add-to-wishlist'}`}
                        
data-category={this.props.product.category}  // ✅ Add category
  data-sku={this.props.product.sku}  // ✅ Add SKU
  data-title={this.props.product.title}  // ✅ Add title
  data-price={this.props.product.price}  // ✅ Add price


                        className={`button btn-margin ${(this.checkWishlist(this.props.product.id)) ? 'is-info' : 'is-primary'}`}
                        onClick={(event) => {
                          event.stopPropagation(); // ✅ prevents bubbling => event firing multiple times
                          console.log("[React] onClick fired");

                    								(this.checkWishlist(this.props.product.id)) ?
                    									this.props.dispatch(removeFromWishlist(this.getKeyByIdForWl(this.props.product.id), event.target)) :
                    									this.props.dispatch(addToWishlist(this.props.product.id, event.target))
                    							}}>
                  {`${(this.checkWishlist(this.props.product.id)) ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}`}
                </button>
              </div>

            </div>
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
    wishlist: state.WishlistReducer.data,
    product: state.ProductReducer.data
  }
};
export default connect(stateProps)(SingleProduct)
