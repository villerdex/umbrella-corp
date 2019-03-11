import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../services/Api.services'

export function* watcherSaga() {
    yield takeLatest('FETCH_CUSTOMER_LIST', fetchCustomerList);
  }
  
function* fetchCustomerList() {
  try {
    const response = yield call( Api.fetchCustomers);
    let customers = response.data
    console.log('test', customers)
    yield put({ type: 'FETCH_CUSTOMER_LIST_SUCCESS', customers});
  
  } catch (error) {
    console.error(error)
    yield put({ type: 'FETCH_CUSTOMER_LIST_FAIL', error });
  }
}