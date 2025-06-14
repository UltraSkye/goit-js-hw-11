import axios from 'axios';

const API_KEY = '50582422-1579f90b4d4d4016b97d9d478';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  }).then(response => response.data);
}