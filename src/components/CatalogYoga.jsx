import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAnalytics from '../utils/withAnalytics'; // Import the HOC for analytics tracking

/**
 * Create Yoga Category Catalog Component
 * Created on 4/28 per Krward
 */

class CatalogYoga extends Component {
  render() {
    return (
             
        /* Catalog Content */
        <div className="columns is-multiline">
          
          {/* Yoga Catalog Slot 1 */}
         <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/yogaproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/marquee/homepage-market-launch-event.sm.png"
                      alt="Yoga Tops"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP TOPS</h5>
                      </div>
                      <div style={{ height: "3em"}}></div>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>

          {/* Yoga Catalog Slot 2 */}
         <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/yogaproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/all-products-marquee.sm.png"
                      alt="Yoga Mats"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP MATS</h5>
                      </div>
                      <div style={{ height: "3em"}}></div>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>

          {/* Yoga Catalog Slot 3 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/yogaproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bcm-intro_new.sm.jpg"
                      alt="Yoga Bottoms"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP BOTTOMS</h5>
                      </div>
                      <div style={{ height: "3em"}}></div>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CatalogYoga; //updated