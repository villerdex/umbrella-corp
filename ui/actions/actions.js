/*
 * action types
 */

export const FETCH_CUSTOMER_LIST = 'FETCH_CUSTOMER_LIST'

export function fetchCustomers(filter) {
  return{ type: FETCH_CUSTOMER_LIST, filter }
}