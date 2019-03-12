
// reducer with initial state
const initialState = {
  customers: [],
  toUpdateCustomer: null
};

export function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_CUSTOMER_LIST_SUCCESS":
      console.log('saga', action)
      return { ...state, customers: action.customers.customers };
    case "CUSTOMER_TO_UPDATE_SUCCESS":
    console.log('saga', action)
      return { ...state, toUpdateCustomer: action.customer };
    default:
      return state;
  }
}