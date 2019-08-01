import { put, takeLatest, all } from 'redux-saga/effects';
import { addFriendSuccess } from 'containers/App/actions';
import {
  GET_CONTACTS,
  GET_NEWS,
  ADD_FRIEND,
  GET_CONTACT_BY_ID,
  GET_CONTACT
} from '../containers/App/constants';

function* fetchNews() {
  const contacts = yield fetch('http://localhost:3001/api/contacts/list').then(
    response => response.json(),
  );
  yield put({ type: GET_CONTACTS, contacts });
}
function* addfriend({ friendName, currentContactId }) {
  const friend = { friendName };
  const data = yield fetch(`http://localhost:3001/api/contacts/add/${currentContactId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(friend),
  }).then(response => response.json());
  yield put(addFriendSuccess(data.contact, data.contacts));
}

function* fetchContactById(action) {
  const contact =
    yield fetch(`http://localhost:3001/api/contacts/${action.contactId}`).then(response => response.json());
  yield put({ type: GET_CONTACT, contact });
}

function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews);
  yield takeLatest(ADD_FRIEND, addfriend);
  yield takeLatest(GET_CONTACT_BY_ID, fetchContactById)
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}