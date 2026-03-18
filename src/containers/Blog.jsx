import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchBlog } from '../actions/fetchBlog'
import BlogItems from '../components/BlogItems'
import BlogItems2 from '../components/BlogItems2'


/**
 * Create Blog Container
 */
class Blog extends Component {
  componentDidMount() {
    const { dispatch } = this.props
  }

  render() {
    return (
      <div>
        <Helmet key={window.location.pathname}> 
          <title>Blog</title>
          <meta name="site_section" content="Blog" />
          <meta name="product_category" content="" />
        </Helmet>



        <section className="section">

        <div className="container">
          <div className="p-5 text-center bg-image rounded-3" style={{
            backgroundImage:
              'url("https://teehuggers.com/web/img/imgs/AdobeStock_555087034.jpg")',
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            height: 319
            }}
          >
              <div className="d-flex flex-row-bd h-100" style={{}}>
                <div className="hero-banner-text">
                  <div className="titles grouped">
                    <h4 className="subtitle-right-white" style={{ textShadow: "1px 1px #000000" }}>GET THE MOTIVATION YOU NEED</h4>
                    <h1 className="title-right-white" style={{ textShadow: "1px 1px #000000" }}>INSPIRING STORIES FROM</h1>
                    <h1 className="title-right-white" style={{ textShadow: "1px 1px #000000" }}>WORLD-CLASS ATHLETES</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <br /> <br />

          <div className="container">
            <div className="heading">
              <h1 className="title">LATEST BLOG STORIES</h1>
            <div>
            <BlogItems />
            </div>
            <br /> <br /><br />
            <div>
            <BlogItems2 />
            </div>
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
    about: state.BlogReducer.data
  }
};


export default connect(stateProps)(Blog)
