import React, { Component } from 'react'
/**
 * Create Footer Component
 */
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <ul className="Footernav-disclaimers">
            <li className="Footernav-disclaimer">
            <p style={{ textAlign: "right" }}>Copyright &copy; 2025 Adobe. Developed by Gentry Lin for demo purposes only.<br />
            Transactions on this site are not real.</p>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
export default Footer
