/**
 *
 * ViewContact
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ContactDetails from '../../components/ContactDetails';
import { getContact } from '../App/actions';
import { makeSelectContact } from '../App/selectors';

export function ViewContact(props) {
  const {
    match: { params },
    getCurrentContact,
    currentContact,
  } = props;
  const currentContactId = params.contactId;
  getCurrentContact(currentContactId);

  if (currentContact !== undefined) {
    return (
      <div>
        <Helmet>
          <title>ViewContact</title>
          <meta name="description" content="Description of ViewContact" />
        </Helmet>
        <ContactDetails contact={currentContact} />
      </div>
    );
  }
}

ViewContact.propTypes = {
  getCurrentContact: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentContact: contactId => dispatch(getContact(contactId)),
  };
}

const mapStateToProps = createStructuredSelector({
  currentContact: makeSelectContact(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ViewContact);
