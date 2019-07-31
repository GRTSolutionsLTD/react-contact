/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';

function Footer() {
  return (
    <div>
      <i className="fa fa-star-o"></i>
      <div>
        <div className="footer-container">
          <div className="row text-center text-xs-center text-sm-left text-md-left ">
            <div className="col-md-3 social mobile">
              <a className="btn btn-social-icon btn-twitter">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
          <div />
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};
export default memo(Footer);
