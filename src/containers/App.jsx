import React, { Component } from 'react'
import NavBar from './Navbar'
import Footer from '../components/Footer'
import Helmet from "react-helmet"
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/**
 * Create App Component
 */
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="page-container">
          <Helmet>
            <title>{this.props.title || 'Default Title'}</title>
          </Helmet>
          <NavBar />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

const stateProps = (state) => ({
  loading: state.LoadingReducer.isVisible
});

export default connect(stateProps)(App);