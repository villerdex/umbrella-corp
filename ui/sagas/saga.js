import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../services/Api.services'

export function* watcherSaga() {
    yield takeLatest('FETCH_CUSTOMER_LIST', fetchCustomerList);
    yield takeLatest('ADD_CUSTOMER', addCustomer);
    yield takeLatest('DELETE_CUSTOMER', deleteCustomer);
    yield takeLatest('UPDATE_CUSTOMER', updateCustomer);
    yield takeLatest('CUSTOMER_TO_UPDATE', customerToUpdate);
}

function* addCustomer(payload) {
  try {
    let customer = payload.customer
    yield call( Api.addCustomer, customer);

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

function* customerToUpdate(payload) {
  try {
    let customer = payload.customer
    yield put({ type: 'CUSTOMER_TO_UPDATE_SUCCESS', customer});
  } catch (error) {
    yield put({ type: 'CUSTOMER_TO_UPDATE_FAIL', error });
  }
}


function* updateCustomer(payload) {
  try {
    let customer = payload.customer
    yield call( Api.updateCustomer, customer);
    yield fetchCustomerList()
  
  } catch (error) {
    yield put({ type: 'FETCH_CUSTOMER_LIST_FAIL', error });
  }
}

function* deleteCustomer(payload) {
  try {
    let customer = payload.customer
    yield call( Api.deleteCustomer, customer);

    yield fetchCustomerList();

  } catch (error) {
    console.error(error)
    yield put({ type: 'DELETE_CUSTOMER_SUCCESS', error });
  }
}