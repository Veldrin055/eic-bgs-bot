import axios from 'axios'

const client = axios.create({
  baseURL: 'https://elitebgs.app/api/ebgs/v4/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default client
export const factionId = '59e7a70bd22c775be0fe2ae9'