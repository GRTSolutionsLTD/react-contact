import React, { memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { getContact } from '../App/actions'
import { makeSelectContact } from '../App/selectors';
// eslint-disable-next-line import/no-unresolved
// import "containers/ContactFriends/contactFriends.scss"
// import { find } from 'lodash';

export function ContactFriends(props) {
  // eslint-disable-next-line react/prop-types
  const { match: { params }, getCurrentContact, currentContact } = props;
  const currentContactId = params.contactId;
  getCurrentContact(currentContactId);  
  const [friendName, setFriendName] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    setFriendName('');
  };
  const handleChange = event => {
    event.preventDefault();
    setFriendName(event.target.value);
  };
  if (currentContact !== undefined) {
    return (
      <div className="col-centered" >
        <Helmet>
          <title className="jumbotron text-center">ContactFriends</title>
          <meta name="description" content="Description of ContactFriends" />
        </Helmet>
        <p> Hi {currentContact.name}!!</p>  
        <h1>friends</h1>
        {
          currentContact.friends.map(friend => <li key={friend.id} > {friend.name}</li>)
        }
        <form onSubmit={handleSubmit}>
          <div className="form-group-sm">
            <input
              type="text"
              value={friendName}
              onChange={handleChange}
              placeholder="Friendname"
              required
              className="form-control"
            />
            <input type="submit" className="btn btn-primary" value="add friend"></input>
          </div>
         
        </form>
        <br />
      </div>

    );
  }
}


ContactFriends.propTypes = {
  getCurrentContact: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentContact: contactId => dispatch(getContact(contactId)),
  };
}

const mapStateToProps = createStructuredSelector({
  currentContact: makeSelectContact(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(ContactFriends);

