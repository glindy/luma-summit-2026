import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAnalytics from '../utils/withAnalytics'; // Import the HOC for analytics tracking

/**
 * Create Gear Category Catalog Component
 * Created on 4/28 per Krward
 */

class CatalogGear extends Component {
  render() {
    return (
             
        /* Catalog Content */
        <div className="columns is-multiline">
          
          {/* Gear Catalog Slot 1 */}
         <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/gearproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://demo-system-next.s3.amazonaws.com/cja/r/g/w/checking-watch.jpg"
                      alt="Gear Watches"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP WATCHES</h5>
                      </div>
                      <div style={{ height: "3em"}}></div>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>

          {/* Gear Catalog Slot 2 */}
         <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/gearproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://demo-system-next.s3.amazonaws.com/cja/r/g/h/bottle-mtn-flowers.jpg"
                      alt="Gear Hydration"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP HYDRATION</h5>
                      </div>
                      <div style={{ height: "3em"}}></div>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>

          {/* Gear Catalog Slot 3 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/gearproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://demo-system-next.s3.amazonaws.com/cja/r/g/s/glasses-on-beach.jpg"
                      alt="Gear Sunglasses"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP SUNGLASSES</h5>
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

export default CatalogGear; //updated