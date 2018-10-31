import axios from 'axios';
import { authHeader } from '../helpers/auth-header';

export const fetchPlansListRequest = (params) => {
  const options = {
    url: 'api/plans',
    method: 'GET',
    params: params,
    headers: authHeader()
  }
  return axios(options);
};
