/**
 *
 * ViewContact
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectViewContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ViewContact() {
  useInjectReducer({ key: 'viewContact', reducer });
  useInjectSaga({ key: 'viewContact', saga });

  return (
    <div>
      <Helmet>
        <title>ViewContact</title>
        <meta name="description" content="Description of ViewContact" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ViewContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewContact: makeSelectViewContact(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ViewContact);
