import { createSelector } from 'reselect';

/**
 * Direct selector to the contactList state domain
 */

const selectContactListDomain = state => state.contactList;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactList
 */

const makeSelectContactList = () =>
  createSelector(
    selectContactListDomain,
    globalState => globalState.contactList
  );

export default makeSelectContactList;
export { selectContactListDomain };
