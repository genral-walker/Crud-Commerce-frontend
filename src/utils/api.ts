import config from 'constants/config';
import { APIResponse } from 'types';

const api = async (
  URL: string,
  method: 'GET' | 'POST' | 'DELETE',
  data?: object
) => {
  try {
    const response = await fetch(config.BASE_URL + URL, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' && data ? JSON.stringify(data) : undefined,
    });

    const result = (await response.json()) as APIResponse;
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default api;
