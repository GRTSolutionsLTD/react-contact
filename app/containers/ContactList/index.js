/**
 *
 * ContactList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectContactList } from 'containers/App/selectors';
import messages from './messages';

export function ContactList({ contactList }) {
  const listItems = contactList.map(contact => <li>{contact.name}</li>);

  return (
    <div>
      <Helmet>
        <title>ContactList</title>
        <meta name="description" content="Description of ContactList" />
      </Helmet>
      {listItems}
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  contactList: makeSelectContactList(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ContactList);
