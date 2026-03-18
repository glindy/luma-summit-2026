import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAnalytics from '../utils/withAnalytics'; // Import the HOC for analytics tracking

/**
 * Create Womens Category Catalog Component
 * Created on 4/25 per Krward
 */

class CatalogWomens extends Component {
  render() {
    return (
             
        /* Catalog Content */
        <div className="columns is-multiline">
          
          {/* Women's Catalog Slot 1 */}
         <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/womensproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://demo-system-next.s3.amazonaws.com/cja/r/w/t/matching-tops.jpg"
                      alt="Women's Tops"
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

          {/* Women's Catalog Slot 2 */}
         <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/womensproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://demo-system-next.s3.amazonaws.com/cja/r/w/b/runner-leafy-bg.jpg"
                      alt="Women's Bottoms"
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

          {/* Women's Catalog Slot 3 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <a href="#/womensproducts">
                  <figure className="image is-16by9">
                    <img
                      src="https://demo-system-next.s3.amazonaws.com/cja/r/w/s/tying-shoe-beach.jpg"
                      alt="Women's Shoes"
                      style={{ width: "100%" }}
                    />
                    <div className="img-text-container">
                      <div className="text-center bg-text inner bottom-center">
                        <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP SHOES</h5>
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

export default CatalogWomens; //updated