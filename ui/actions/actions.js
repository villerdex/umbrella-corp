/*
 * action types
 */

export const FETCH_CUSTOMER_LIST = 'FETCH_CUSTOMER_LIST'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'


export function fetchCustomers(filter) {
  return { type: FETCH_CUSTOMER_LIST, filter }
}

export function addCustomer(customer) {
  return { type: ADD_CUSTOMER, customer }
}