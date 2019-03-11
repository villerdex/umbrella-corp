/*
 * action types
 */

export const FETCH_CUSTOMER_LIST = 'FETCH_CUSTOMER_LIST'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'


export function fetchCustomers(filter) {
  return { type: FETCH_CUSTOMER_LIST, filter }
}

export function addCustomer(customer) {
  return { type: ADD_CUSTOMER, customer }
}

export function deleteCustomer(customer) {
  return { type: DELETE_CUSTOMER, customer }
}