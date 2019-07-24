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
import makeSelectViewContact from './selectors';
import messages from './messages';

export function ViewContact(props) {
  // eslint-disable-next-line react/prop-types
  const { match: { params } } = props;
  const currentContactId=params.contactId;
  return (
    <div>
      <Helmet>
        <title>ViewContact</title>
        <meta name="description" content="Description of ViewContact" />
      </Helmet>
      <p>{currentContactId}</p>
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
