import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchLumaPlus } from '../actions/fetchLumaPlus'
import MyForm from '../components/MyForm';


/**
 * Create Luma+ Container
 */
class LumaPlus extends Component {
  componentDidMount() {
    const { dispatch } = this.props
  }

render() {

    return (
      <div>
        <Helmet> 
          <title>Luma Plus</title>
          <meta name="site_section" content="Luma Plus" />
          <meta name="product_category" content="" />
          
        </Helmet>
        <section className="section">

          <div className="container">
            <div className="p-5 text-center bg-image rounded-3" style={{
              backgroundImage:
                'url("https://demo-system-next.s3.amazonaws.com/cja/r/l/summit-silhouette.jpg")',
              backgroundPosition: "center",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              height: 319
              }}
            >
            <div className="d-flex flex-row-bd h-100" style={{}}>
              <div className="hero-banner-text">
                <div className="titles grouped">
                  <h4 className="subtitle-left-white" style={{textTransform: "uppercase", textShadow: "1px 1px #000000",}}>luma+ rewards</h4>
                  <h1 className="title-left-white" style={{textTransform: "uppercase", textShadow: "1px 1px #000000",}}>it's good to be together</h1>
                </div>
              </div>
            </div>
            </div>
          </div>
        <br /> <br />

        <div className="container">
  <div className="row">
    <div className="col-md-6 order-2 order-md-1">
      <img
        src="https://demo-system-next.s3.amazonaws.com/cja/r/l/couple-camp-forest.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
    <div className="col-md-6 order-1 order-md-2">
      <div className="card-body">
        <h1 className="title">HOW IT WORKS</h1>
        <p className="card-text" style={{ fontSize: "1.25em" }}>
          With LUMA+ you get points for every online or in-store purchase.
          Exchange your points for discounts and perks and get access to our
          exclusive offers for members.
        </p>
        <br />
        <ul style={{ fontSize: "1.25em" }}>
          <li>Sign up for free</li>
          <li>Earn points for every purchase</li>
          <li>Climb higher with exclusive member offers</li>
          <li>Get early access to limited edition collections</li>
        </ul>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="row">
    <div className="col-md-6 order-2 order-md-1">
      <div className="card-body">
        <h1 className="title">FROM BLUE TO PLATINUM</h1>
        <p className="card-text" style={{ fontSize: "1.25em" }}>
          Earn more points, rise to a new peak and get even more special offers
          and unique experiences, including free expedited shipping and
          dedicated customer support.
        </p>
      </div>
    </div>
    <div className="col-md-6 order-1 order-md-2">
      <img
        src="https://demo-system-next.s3.amazonaws.com/cja/r/l/mtn-jump.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
  </div>
  <br />
  <div className="row">
    <h1 className="title" style={{ marginLeft: 12 }}>
      THE PERKS OF BEING A LUMA+ MEMBER
    </h1>
    <div className="col-md-4 order-1 order-md-2">
      <img
        src="https://demo-system-next.s3.amazonaws.com/cja/r/l/trail-run-logo.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
    <div className="col-md-8 order-2 order-md-1">
      <img
        src="https://demo-system-next.s3.amazonaws.com/assets/luma/Luma-tiers.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
  </div>
  <br />
  <div className="row">

        <MyForm />

  </div>
</div>


        </section>
      </div>
    )
  }
}
/**
 * Insert Props Into Component **/
 
const stateProps = (state) => {
  return {
    about: state.LumaPlusReducer.data
  }
};


export default connect(stateProps)(LumaPlus)
