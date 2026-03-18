import React, { Component } from 'react'
import Helmet from "react-helmet"
import { generate } from 'randomstring'

class SignupConfirm extends Component {

  componentDidMount() {
    //digitalData.page.pageInfo.pageID = "order-confirm-page";
    //digitalData.page.pageInfo.pageName = "ACS Demo - Order Confirmation Page";
  }

  render() {
    return (
      <div>
         <Helmet> 
          <title>Signup Confirmation</title>
          <meta name="site_section" content="Luma Plus" />
          <meta name="product_category" content="" />
          
        </Helmet>

        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">WELCOME TO LUMA+</h1>
            </div>
            <br />
            <br />
            <br />
            
            <p style={{ fontSize: "1.25em" }}>You're all signed up. Check your inbox for an exclusive new member discount code just for you and start shopping and earning rewards today!</p>

            
          </div>
        </section>
      </div>
    )
  }
}

export default (SignupConfirm)
