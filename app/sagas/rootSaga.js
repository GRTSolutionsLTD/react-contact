import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_CONTACTS, GET_NEWS, GET_CONTACT_BY_ID,GET_CONTACT } from '../containers/App/constants';

function* fetchNews() {
  const contacts = 
  yield fetch('http://localhost:3001/api/contacts/list').then(response => response.json(), );    
  yield put({ type: GET_CONTACTS, contacts });
}

function* fetchContactById(action) {
  const contact = 
  yield fetch(`http://localhost:3001/api/contacts/${action.contactId}`).then(response => response.json(), );    
  yield put({ type: GET_CONTACT, contact });
}
function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews)
  yield takeLatest(GET_CONTACT_BY_ID, fetchContactById)
}
export default function* rootSaga() {
  yield all([actionWatcher(),]);
}