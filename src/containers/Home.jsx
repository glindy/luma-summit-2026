import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import Catalog from '../components/Catalog' //1/31: adding this for homepage catalog container
import BlogItems from '../components/BlogItems' //1/31: adding this for homepage catalog container
import { fetchProducts } from '../actions/fetchLatestProducts'
import { addToCart } from '../actions/addToCart'
import { addToWishlist } from '../actions/addToWishlist'
import { removeFromWishlist } from '../actions/removeFromWishlist'
import { removeFromCart } from '../actions/removeFromCart'
import Helmet from "react-helmet"
import Slider from "react-slick"


/**
 * Create ProductList Container
 */
class ProductList extends Component {

  addToCart(id, target) {
    const { dispatch } = this.props;
    dispatch(addToCart(id, target))
  }

  addToWishlist(id, target) {
    const { dispatch } = this.props;
    dispatch(addToWishlist(id, target))
  }

  removeFromWishlist(id, target) {
    const { dispatch } = this.props;
    dispatch(removeFromWishlist(id, target))
  }

  removeFromCart(id, target) {
    const { dispatch } = this.props;
    dispatch(removeFromCart(id, target))
  }

  componentDidMount() {
    const { dispatch } = this.props;
      // digitalData.page.pageName = "Home"; 
      // digitalData.page.siteSection = "Homepage"; 

    dispatch(fetchProducts())
  }

  render() {

    const settings = {
      dots: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: true
    };



    return (

      <div key="HomePage">
        <Helmet> 
          <title>Home</title>
          <meta name="site_section" content="Homepage" />
          <meta name="product_category" content="" />
          
        </Helmet>
        <section className="section">


          <div className="container">
            <Slider {...settings}>
              <div><img src="https://demo-system-next.s3.amazonaws.com/cja/r/h/boardwalk-jogging.jpg" width={1100}height={509}/></div>
              <div><img src="https://demo-system-next.s3.amazonaws.com/cja/r/h/mtn-trail-run.jpg" width={1100}height={509}/></div>
              <div><img src="https://demo-system-next.s3.amazonaws.com/cja/r/h/post-workout-wall.jpg" width={1100}height={509}/></div>
              <div><img src="https://demo-system-next.s3.amazonaws.com/cja/r/h/sunset-mtn-trek.jpg" width={1100}height={509}/></div>
            </Slider>
          </div>
          <br/><br/><br/>


          <div className="container">
          <div className="heading">
              <h1 className="title" style={{textTransform: "uppercase",}}>your strength. your story. your gear.</h1>
            <div>
            <Catalog />
            </div>
          </div>
          </div>
          <br/><br/>


          {/* Shipping icon column */}
          <div className="container">
            <div className="col d-flex pt-1">

              <div className="col-lg">
                <img
                  style={{
                  float: "left",
                  width: "15%",
                  paddingRight: 10,
                  marginLeft: "15%"
                  }}
                  src="https://demo-system-next.s3.amazonaws.com/assets/luma/icons/worldwide-shipping-icon.png"
                  alt="worldwide shipping"
                />
                <h6 style={{ marginLeft: 20 }}>WORLDWIDE SHIPPING</h6>
                <p>free exchanges &amp; returns</p>
              </div>

          {/* Tracking icon column */}
              <div className="col-lg">
                <img
                  style={{
                  float: "left",
                  width: "15%",
                  paddingRight: 10,
                  marginLeft: "20%"
                  }}
                  src="https://demo-system-next.s3.amazonaws.com/assets/luma/icons/order-tracking-icon.png"
                  alt="order tracking"
                />
                <h6>ORDER TRACKING</h6>
                <p>One-click ship &amp; track</p>
              </div>

          {/* Support chat icon column */}  
              <div className="col-lg">
                <img
                  style={{
                  float: "left",
                  width: "15%",
                  paddingRight: 10,
                  marginLeft: "25%"
                  }}
                  src="https://demo-system-next.s3.amazonaws.com/assets/luma/icons/call-center-icon.png"
                  alt="customer support"
                />
                <h6>24/7 CUSTOMER SUPPORT</h6>
                <p>call, chat, or email anytime</p>
              </div>
          </div>
        </div>
        <br /><br /><br />


          <div className="container">
            <div className="heading">
              <h1 className="title">NEW ARRIVALS</h1>

              <div key="ProductListHomePage" className="columns is-multiline">
                {this.props.products.map((product) => {
                  return <ProductItem key={product.id}
                                      product={product}
                                      addToCart={this.addToCart.bind(this)}
                                      addToWishlist={this.addToWishlist.bind(this)}
                                      removeFromWishlist={this.removeFromWishlist.bind(this)}
                                      removeFromCart={this.removeFromCart.bind(this)}
                                      wishlist={this.props.wishlist}
                                      cart={this.props.cart}
                    />
                })}
              </div>
            </div>
          </div>

          <br/><br/><br/>

          <div className="container">
            <div className="heading">
              <h1 className="title">LATEST BLOG STORIES</h1>
            <div>
            <BlogItems />
            </div>
          </div>
          </div>

          

        </section>
      </div>
      // end "HomePage" (key)

    )
  }
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
  return {
    products: state.LatestProductsReducer.data,
    wishlist: state.WishlistReducer.data,
    cart: state.CartReducer.data,
  }
};
export default connect(stateProps)(ProductList)
