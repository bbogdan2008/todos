import axios from 'axios';
import { authHeader } from '../helpers/auth-header';

export const fetchPlansListRequest = (params) => {

  console.log("try to do something ... ");
  const options = {
    url: 'api/plans',
    method: 'GET',
    params: params,
    headers: authHeader()
  }

  return axios(options);
};
