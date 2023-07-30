import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://cbz-backend.peerawitp.me'
})