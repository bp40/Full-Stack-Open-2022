import axios from 'axios';

const baseUrl = 'https://shielded-badlands-32937.herokuapp.com/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((res) => res.data);
};

const update = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request.then((res) => res.data);
};

const personsService = {
  getAll, create, remove, update,
};
export default personsService;
