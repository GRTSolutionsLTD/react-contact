import { GET_CONTACTS, GET_CONTACT, GET_NEWS, ADD_FRIEND, GET_CONTACT_BY_ID } from './constants';

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
    friend,
    currentContactId,
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
