
// reducer with initial state
const initialState = {
  customers: [],
};

export function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_CUSTOMER_LIST_SUCCESS":
      console.log('saga', action)
      return { ...state, customers: action.customers.customers };
    default:
      return state;
  }
}