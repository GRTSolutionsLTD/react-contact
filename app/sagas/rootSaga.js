import { put, takeLatest, all } from 'redux-saga/effects';
import {
  GET_CONTACTS,
  GET_NEWS,
  ADD_FRIEND,
} from '../containers/App/constants';

function* fetchNews() {
  const contacts = yield fetch('http://localhost:3001/api/contacts/list').then(
    response => response.json(),
  );
  yield put({ type: GET_CONTACTS, contacts });
}
function* addfriend(friebd, id) {
  const contact = { id: friebd.id, name: friebd.name };
  const json = yield fetch(`http://localhost:3001//api/contacts/add/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(contact),
  }).then(response => response.json());
  yield put({ type: 'addContact', json });
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews);
  yield takeLatest(ADD_FRIEND, addfriend);
}
