import React, { memo, useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { getContactById, addFriendToContact } from '../App/actions';
import { makeSelectContact } from '../App/selectors';
import 'containers/ContactFriends/contactFriends.scss';

export function ContactFriends({
  match: { params },
  getCurrentContact,
  currentContact,
  addingFriend,
}) {
  const currentContactId = params.contactId;
  const [friendName, setFriendName] = useState('');

  useEffect(() => {
    if (!currentContact)
      getCurrentContact(currentContactId);
  });

  const handleSubmit = () => {
    addingFriend(friendName, currentContactId)
  };
  const handleChange = event => {
    event.preventDefault();
    setFriendName(event.target.value);
  };

  return currentContact && (
    <div className="col-centered">
      <Helmet>
        <title>ContactFriends</title>
        <meta name="description" content="Description of ContactFriends" />
      </Helmet>
      <div>
        <h1> Hi {currentContact.name}!!</h1>
        <h2>friends</h2>
        {currentContact.friends.map(friend => (
          <li key={friend.id}> {friend.name}</li>
        ))}
        <input
          name="addFriend"
          type="text"
          value={friendName}
          onChange={handleChange}
          placeholder="Friendname"
          required
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}>
          add friend </button>
        <br />
      </div>
    </div>
  );
}

ContactFriends.propTypes = {
  getCurrentContact: PropTypes.func,
  addingFriend: PropTypes.func,
  currentContact: PropTypes.object,
  match: PropTypes.any
};

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentContact: contactId => dispatch(getContactById(contactId)),
    addingFriend: (friendName, currentContactId) =>
      dispatch(addFriendToContact(friendName, currentContactId)),
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
)(ContactFriends);
