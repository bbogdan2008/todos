import axios from 'axios';

export const fetchTodoListRequest = (params) => {
  return axios.get('api/todos', { params });
};
