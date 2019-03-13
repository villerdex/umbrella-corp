/*
 * action types
 */

 //  API call actions
export const FETCH_CUSTOMER_LIST = 'FETCH_CUSTOMER_LIST'
export const FETCH_CUSTOMER_CHART = 'FETCH_CUSTOMER_CHART'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'

// State call actiions
export const CUSTOMER_TO_UPDATE = 'CUSTOMER_TO_UPDATE'

export function fetchCustomers(filter) {
  return { type: FETCH_CUSTOMER_LIST, filter }
}

export function fetchCustomerChart() {
  return { type: FETCH_CUSTOMER_CHART }
}

export function addCustomer(customer) {
  return { type: ADD_CUSTOMER, customer }
}

export function customerToUpdate(customer) {
  return { type: CUSTOMER_TO_UPDATE, customer }
}

export function updateCustomer(customer) {
  return { type: UPDATE_CUSTOMER, customer }
}

export function deleteCustomer(customer) {
  return { type: DELETE_CUSTOMER, customer }
}