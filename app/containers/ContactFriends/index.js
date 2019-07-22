/**
 *
 * ContactFriends
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
import makeSelectContactFriends from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ContactFriends() {
  useInjectReducer({ key: 'contactFriends', reducer });
  useInjectSaga({ key: 'contactFriends', saga });

  return (
    <div>
      <Helmet>
        <title>ContactFriends</title>
        <meta name="description" content="Description of ContactFriends" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ContactFriends.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactFriends: makeSelectContactFriends(),
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
)(ContactFriends);
