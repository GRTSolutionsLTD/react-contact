import {
  GET_CONTACTS,
  GET_CONTACT,
  GET_CONTACT_BY_ID,
  GET_NEWS,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESS
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
    case ADD_FRIEND:
      return {
        ...state,
        loading: false,
        // contacts
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        loading: true,
        contact: action.contact,
        contacts: action.contacts,
      };
    default:
      return state;
  }
}

export default appReducer;
