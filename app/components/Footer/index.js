/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Footer() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <div>
        <div className="footer-container">
          <div />
          <div>
            <h5>hello</h5>
          </div>
        </div>88888
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
