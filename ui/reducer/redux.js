
// reducer with initial state
const initialState = {
  customers: [],
};

export function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_CUSTOMER_LIST_SUCCESS":
      console.log(action)
      return { ...state, customers: action.customers.customers };
    case "ADD_CUSTOMER_SUCCESS":
      return { ...state, customers: {...state.customers} }   
    default:
      return state;
  }
}