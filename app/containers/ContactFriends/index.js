import React, { memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { getContact, addFriendToContact } from '../App/actions';
import { makeSelectContact } from '../App/selectors';
// eslint-disable-next-line import/no-unresolved
import 'containers/ContactFriends/contactFriends.scss';
// import { find } from 'lodash';
export function ContactFriends(props) {
  // eslint-disable-next-line react/prop-types
  const {
    match: { params },
    getCurrentContact,
    currentContact,
    addingFriend,
  } = props;
  const currentContactId = params.contactId;
  getCurrentContact(currentContactId);
  const [friendName, setFriendName] = useState('');
  const handleSubmit = event => {
    // event.preventDefault();
    setFriendName('');
    addingFriend(friendName, currentContactId);
  };
  const handleChange = event => {
    event.preventDefault();
    setFriendName(event.target.value);
  };
  if (currentContact !== undefined) {
    return (
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
          <form onSubmit={handleSubmit(friendName)}>
            <input
              name="addFriend"
              type="text"
              value={friendName}
              onChange={handleChange}
              placeholder="Friendname"
              required
            />
            <input
              type="submit"
              className="btn btn-primary"
              value="add friend"
            />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

ContactFriends.propTypes = {
  getCurrentContact: PropTypes.func,
  addFriendToContact: PropTypes.func,
  currentContact: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentContact: contactId => dispatch(getContact(contactId)),
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
