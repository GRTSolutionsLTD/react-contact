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
import { find } from 'lodash';
import { makeSelectContactList } from 'containers/App/selectors';
import ContactDetails from '../../components/ContactDetails';

export function ViewContact({ contactList }) {
  const id = '5d35a6e4912582c23b684694';
  const contacts = find(contactList, { _id: id });
  // const contacts = contactList;
  // const contacts = contactList.filter(item => item._id.includes('5d35a6e473ba203bc8740c16'));
  // const contacts = contactList.filter(item => item._id.includes(idContact));

  return (
    <div>
      <Helmet>
        <title>ViewContact</title>
        <meta name="description" content="Description of ViewContact" />
      </Helmet>
      <ContactDetails contact={contacts} />
    </div>
  );
}

ViewContact.propTypes = {
  idContact: PropTypes,
  contactList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  contactList: makeSelectContactList(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ViewContact);
