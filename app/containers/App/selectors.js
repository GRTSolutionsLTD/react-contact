import { createSelector } from 'reselect';

const selectGlobal = state => state.global;

const makeSelectContactList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contacts,
  );

const makeSelectContact = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contact,
  );

export { selectGlobal, makeSelectContactList, makeSelectContact };
