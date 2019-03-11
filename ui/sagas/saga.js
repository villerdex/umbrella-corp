import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../services/Api.services'

export function* watcherSaga() {
    yield takeLatest('FETCH_CUSTOMER_LIST', fetchCustomerList);
    yield takeLatest('ADD_CUSTOMER', addCustomer);
}

function* addCustomer(payload) {
  try {
    let customer = payload.customer
    const response = yield call( Api.addCustomer, customer);
    let result = response.data
    yield put({ type: 'ADD_CUSTOMER_SUCCESS', result});

    yield fetchCustomerList();
  
  } catch (error) {
    console.error(error)
    yield put({ type: 'ADD_CUSTOMER_FAIL', error });
  }
}
  
function* fetchCustomerList() {
  try {
    const response = yield call( Api.fetchCustomers);
    let customers = response.data
    yield put({ type: 'FETCH_CUSTOMER_LIST_SUCCESS', customers});
  
  } catch (error) {
    yield put({ type: 'FETCH_CUSTOMER_LIST_FAIL', error });
  }
}