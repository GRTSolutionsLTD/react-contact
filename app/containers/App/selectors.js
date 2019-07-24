/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal =state =>  state.global||initialState;

const makeSelectContactList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contacts
  );


export {
  selectGlobal,
  makeSelectContactList,
};
