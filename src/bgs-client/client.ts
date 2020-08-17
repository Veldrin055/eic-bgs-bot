import axios from 'axios'

export default axios.create({
  baseURL: 'https://elitebgs.app/api/ebgs/v4/',
  responseType: 'json',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})