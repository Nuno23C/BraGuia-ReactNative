import axios from 'axios';

const BASE_URL = 'https://39b6-193-137-92-72.ngrok-free.app';

const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getApiTrails() {
  try {
    const response = await API.get('/trails');
    // console.log('response', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching trails', error);
  }
}

export default API;
