import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitContact = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

export default api;
