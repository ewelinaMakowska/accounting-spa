// import axios from 'axios'

// export default () => {
//     return axios.create({
//         baseURL: `http://localhost:3306`
//     })
// }

import axios from 'axios'
import { store } from '../store/index';

let token = store.getters.token.replace(/['"]+/g, '');

const instance =
  axios.create({
    baseURL: 'http://localhost:3306', //change to process.env
    headers: { 
        Authorization: `Bearer ${token}`
    }
  })
export default instance
