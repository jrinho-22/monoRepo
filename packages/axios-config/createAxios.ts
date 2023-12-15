import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://seguranca-da-informacao-30b8b-default-rtdb.firebaseio.com/.json',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance