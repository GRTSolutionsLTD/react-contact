import produce from 'immer';
import { GET_CONTACTS } from './constants';
import * as contactsData from '../../data/contacts.json';

// The initial state of the App
export const initialState = {
  contacts: contactsData.default,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CONTACTS:
        draft.contacts = action.contacts;
        break;
    }
  });

export default appReducer;
