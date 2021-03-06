import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import ContactList from 'containers/ContactList/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ViewContact from 'containers/ViewContact/Loadable';
import ContactFriend from 'containers/ContactFriends/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { getNews } from './actions';
import Header from '../../components/Header'

import GlobalStyle from '../../global-styles';
import Footer from '../../components/Footer';

export function App({ getContactList }) {
  getContactList();
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route exact path="/About" component={HomePage} />
        <Route path="/ContactList" component={ContactList} />
        <Route path="/ViewContact/:contactId" component={ViewContact} />
        <Route path="/ContactFriends/:contactId" component={ContactFriend} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <Footer/>
    </div>
  );
}

App.propTypes = {
  getContactList: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getContactList: () => dispatch(getNews()),
  };
}
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
