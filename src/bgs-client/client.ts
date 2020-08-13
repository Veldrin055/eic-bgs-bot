import axios from 'axios'

export default axios.create({
  baseURL: 'https://elitebgs.app/api/ebgs/v4/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})