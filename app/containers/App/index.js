import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import ContactList from 'containers/ContactList/Loadable';
import ViewContact from 'containers/ViewContact/Loadable';
import ContactFriend from 'containers/ContactFriends/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { getNews } from '../App/actions'

import GlobalStyle from '../../global-styles';

export function App({getContactList}) {
  getContactList();
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/ContactList" component={ContactList} />
        <Route path="/ViewContact/:contactId" component={ViewContact} />
        <Route path="/ContactFriends/:contactId" component={ContactFriend} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  getContactList: PropTypes.func
};

// const mapStateToProps = state => ({
//   contacts: state.global
// });

export function mapDispatchToProps(dispatch) {
  return {
    getContactList: () => dispatch(getNews()),
  };
}
const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(App);
