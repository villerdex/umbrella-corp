import axios from "axios";

// axios.defaults.withCredentials = true;

const axiosIntance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});


const Api = {
     fetchCustomers() {
        let params = 'customers-weather?&page=1'
        return axiosIntance.get(params)
      },

      addCustomer(customer) {
        let params = 'customers'
        return axiosIntance.post(params, customer)
      },

      deleteCustomer(customer) {
        let params = 'customers/' + customer.id
        return axiosIntance.delete(params)
      },
}

export default Api 
  