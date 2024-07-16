import Axios from 'axios';

export const axios = Axios.create({
  baseURL: import.meta.env.REACT_APP_API_DEV_BASE_URL || 'http://localhost:5050',
});
