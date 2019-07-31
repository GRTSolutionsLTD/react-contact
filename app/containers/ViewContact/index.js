import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import ContactDetails from '../../components/ContactDetails';
import { getContactById } from '../App/actions';

export function ViewContact(props) {
  const {
    match: { params },
    getCurrentContact,
    loading,
  } = props;

  const currentContactId = params.contactId;
  useEffect(() => {
    getCurrentContact(currentContactId);
  }, []);

  if (loading === false) {
    return (
      <div>
        <Helmet>
          <title>ViewContact</title>
          <meta name="description" content="Description of ViewContact" />
        </Helmet>
        <ContactDetails />
      </div>
    );
  }
}

ViewContact.propTypes = {
  loading: PropTypes.bool,
  getCurrentContact: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentContact: contactId => dispatch(getContactById(contactId)),
  };
}

const mapStateToProps = state => ({
  loading: state.global.loading,
});


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ViewContact);
