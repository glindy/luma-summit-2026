import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCart } from '../actions/fetchCart'
import { fetchWishlist } from '../actions/fetchWishlist'
import Cart from './Cart'
import Wishlist from './Wishlist'

/**
 * Create NavBar Container
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: false,
      isCartOpen: false,
      isWishListOpen: false
    };
    this.registerListeners();
  }

  registerListeners() {
    document.onclick = evt => {
      const btns = document.querySelector('.cart-buttons');
      const popover = document.querySelector('.cart-popover');
      if (btns && btns.contains(evt.target) || popover && popover.contains(evt.target)) {
        evt.stopPropagation();
      } else {
        this.closePopovers();
      }
    };
  }

  closePopovers() {
    this.setState({
      isCartOpen: false,
      isWishListOpen: false
    });
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCart());
    dispatch(fetchWishlist())
  }

  componentDidUpdate() {

  }

  toggleNavBar() {
    this.setState({
      showBar: !this.state.showBar
    })
  }

  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <Link to="/" className="nav-item">
                <img src="https://demo-system-next.s3.eu-north-1.amazonaws.com/assets/luma/luma-logo01.png" title="Luma"
                     alt="Luma"/>
              </Link>
            </div>
            <div className={`nav-right nav-menu ${(this.state.showBar) ? 'is-active' : ''}`}>
              <Link to="/mensproducts" className="nav-item">
                MEN
              </Link>
              <Link to="/womensproducts" className="nav-item">
                WOMEN
              </Link>
              <Link to="/gearproducts" className="nav-item">
                GEAR
              </Link>
              <Link to="/yogaproducts" className="nav-item">
                YOGA
              </Link>
              <Link to="/blog" className="nav-item">
                BLOG
              </Link>
              <Link to="/lumaplus" className="nav-item">
                LUMA+
              </Link>

              <div key="NavBarCart" className="nav-item cart-buttons">
                <span className="button menu-left" onClick={() => this.toggleCartPopover()}>
                  <span className="icon">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  <span className="tag is-light">{Object.keys(this.props.cart).length}</span>
                </span>
                <span to="/wishlist" className="button is-primary menu-right"  onClick={() => this.toggleWishListPopover()}>
                  <span className="icon">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </span>
                  <span className="tag is-light">{Object.keys(this.props.wishlist).length}</span>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <br></br>

        

        {this.state.isCartOpen && (
          <div className="popover cart-popover">
            <Cart closePopover={() => this.closePopovers()}/>
          </div>
        )}

        {this.state.isWishListOpen && (
          <div className="popover cart-popover">
            <Wishlist closePopover={() => this.closePopovers()} />
          </div>
        )}
      </div>

    )
  }

  toggleCartPopover() {
    const cartItemsCount = Object.keys(this.props.cart).length;
    this.setState({
      isCartOpen: !this.state.isCartOpen && cartItemsCount > 0,
      isWishListOpen: false
    });
  }

  toggleWishListPopover() {
    const wishlistItemsCount = Object.keys(this.props.wishlist).length;
    this.setState({
      isWishListOpen: !this.state.isWishListOpen && wishlistItemsCount > 0,
      isCartOpen: false
    });
  }
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
  return {
    cart: state.CartReducer.data,
    wishlist: state.WishlistReducer.data
  }
};

export default connect(stateProps)(NavBar)
