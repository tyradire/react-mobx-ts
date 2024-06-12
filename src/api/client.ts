import axios from 'axios';

export const client = axios.create({
    baseURL: "http://devapp.bonusmoney.pro/mobileapp",
    headers: {
      'TOKEN': '123'
    }
})