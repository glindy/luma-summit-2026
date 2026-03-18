
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchProduct } from '../actions/fetchProduct'
import { fetchProducts } from '../actions/fetchProducts'
import { addToCart } from '../actions/addToCart'
import { addToWishlist } from '../actions/addToWishlist'
import { removeFromWishlist } from '../actions/removeFromWishlist'
import { removeFromCart } from '../actions/removeFromCart'
import SingleProduct from '../containers/SingleProduct'



/** Extract data-* attributes from '../containers/SingleProduct.jsx **/

const dispatchCustomEvent = (product) => { 
  if (!product) {
    console.error("[customEvents] Product data is missing!");
    return;
  }

  console.log("[customEvents] Product data received:", product); // Debugging log

  const productCategory = product.category;
  const productSku = product.sku;
  const productName = product.title;
  const productPrice = product.price;

  window.digitalData = {
    event: "cart-add",
    page: {
      pageTitle: document.title,
      url: window.location.href,
      productCategory,
      productSku,
      productName,
      productPrice,
    },
  };

  console.log(`[customEvents] digitalData updated:`, window.digitalData);

  const event = new CustomEvent("cart-add", {
    detail: { productCategory, productSku, productName, productPrice },
  });

  document.body.dispatchEvent(event);
};

// Attach event listener to all add-to-cart buttons
document.addEventListener("click", (event) => {
  if (event.target.matches("button[data-track-action='link-click']")) {
    event.stopPropagation();
    console.log("[customEvents] Document event listener fired");

    const button = event.target;

    // Avoid double execution by checking if `dispatchCustomEvent` has already been triggered
    if (button.hasAttribute("data-event-dispatched")) return;
    button.setAttribute("data-event-dispatched", "true");

    setTimeout(() => button.removeAttribute("data-event-dispatched"), 100); // Reset for next click


    // Extract product details from data attributes
    const product = {
      category: button.getAttribute("data-category"),
      sku: button.getAttribute("data-sku"),
      title: button.getAttribute("data-title"),
      price: button.getAttribute("data-price"),
    };

    console.log("[customEvents] Product data extracted:", product);

    dispatchCustomEvent(product);
  }
});




export {
  //fireViewEndCustomEvent,
  //fireViewStartCustomEvent,
  dispatchCustomEvent,
  //fireActionTriggerCustomEvent,
}
