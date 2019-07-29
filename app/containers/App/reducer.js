import {
  GET_CONTACTS,
  GET_CONTACT,
  GET_CONTACT_BY_ID,
  GET_NEWS,
} from './constants';

export function appReducer(state = [], action) {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case GET_CONTACT_BY_ID:
      return { ...state, loading: true };
    case GET_CONTACT:
      return {
        ...state,
        loading: false,
        contact: action.contact,
      };
    default:
      return state;
  }
}

export default appReducer;
