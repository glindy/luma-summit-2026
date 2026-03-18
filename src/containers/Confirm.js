import React, { Component } from 'react'
import Helmet from "react-helmet"
import { generate } from 'randomstring'

class Confirm extends Component {

  componentDidMount() {
    //digitalData.page.pageInfo.pageID 
  }

  render() {
    return (
      <div>
        <Helmet> 
          <title>Order Confirmation</title>
        </Helmet>

        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">THANKS FOR YOUR ORDER!</h1>
            </div>
            <br />
            <br />
            <br />
            <h2 style={{ fontSize: "1.25em", fontWeight: "bold" }}>ORDER NUMBER: {generate(10)}</h2>
            <br />
            <p style={{ fontSize: "1.25em" }}>We are getting started on your order right away! Keep an eye on your inbox &mdash; you&#8217;ll receive an email confirmation shortly.</p>

            
          </div>
        </section>
      </div>
    )
  }
}

export default (Confirm)
