import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  console.info('fetching persons');
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newPerson) => {
  console.info('creating person');
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const remove = (id) => {
  console.info('deleting person');
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((res) => res.data);
};

const update = (id, newPerson) => {
  console.info('updating person');
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request.then((res) => res.data);
};

const personsService = {
  getAll, create, remove, update,
};
export default personsService;
