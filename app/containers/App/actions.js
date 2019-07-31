import { GET_CONTACTS, GET_CONTACT, GET_NEWS, ADD_FRIEND, ADD_FRIEND_SUCCESS , GET_CONTACT_BY_ID } from './constants';

/**
 * Load the contacts list
 *
 * @return {object} An action object with a type of GET_CONTACTS
 */
export function getContacts(contacts) {
  return {
    type: GET_CONTACTS,
    contacts,
  };
}
export function addFriendToContact(friend, currentContactId) {
  return {
    type: ADD_FRIEND,
    friendName: friend,
    currentContactId,
  };
}
export function addFriendSuccess(contact,contacts ) {
  return {
    type: ADD_FRIEND_SUCCESS,
    contact,
    contacts,
  };
}
export const getNews = () => ({
  type: GET_NEWS,
});
/**
 * Get the contact by Id
 *
 * @return {object} An action object with a type of GET_CONTACT
 */
export function getContact(contactId) {
  return {
    type: GET_CONTACT,
    contactId,
  };
}
export function getContactById(contactId) {
  return {
    type: GET_CONTACT_BY_ID,
    contactId
  };
}
