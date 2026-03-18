import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Create Homepage Blog Component
 */

class BlogItems2 extends Component {
  render() {
    return (
             
        /* Blog Content */
      
    <div className="columns is-multiline">

    {/* Blog 1 Content */}
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <a href="#/blog">
                <img src="https://demo-system-next.s3.amazonaws.com/cja/r/b/yoga-by-pond.jpg" />
              </a>
            </figure>
            <div className="img-text-container">
              <div className="text-center bg-text inner-blog">
                <div className="overlay">
                  <h5 className="blog">RECHARGE YOUR MIND</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog 2 Content */}
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <a href="#/blog">
                <img src="https://demo-system-next.s3.amazonaws.com/cja/r/b/pond-run.jpg" />
              </a>
            </figure>
            <div className="img-text-container">
              <div className="text-center bg-text inner-blog">
                <div className="overlay">
                  <h5 className="blog">THE NEXT PATH</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog 3 Content */}
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <a href="#/blog">
                <img src="https://demo-system-next.s3.amazonaws.com/cja/r/b/weightlifter-back.jpg" />
              </a>
            </figure>
            <div className="img-text-container">
              <div className="text-center bg-text inner-blog">
                <div className="overlay">
                  <h5 className="blog">LIFT UP</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

 






    );
  }
}

export default BlogItems2;