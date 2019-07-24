import { createSelector } from 'reselect';
import { find } from 'lodash';

import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectContactList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contacts
  );

const makeSelectContact = idContact =>
  createSelector(
    selectGlobal,
    globalState => find(globalState.contacts, { _id: idContact })
  );

export {
  selectGlobal,
  makeSelectContactList,
  makeSelectContact
};
