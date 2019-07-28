import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_CONTACTS, GET_NEWS } from '../containers/App/constants';

function* fetchNews() {
  const contacts = 
  yield fetch('http://localhost:3001/api/contacts/list').then(response => response.json(), );    
  yield put({ type: GET_CONTACTS, contacts });
}
function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews)
}
export default function* rootSaga() {
  yield all([actionWatcher(),]);
}