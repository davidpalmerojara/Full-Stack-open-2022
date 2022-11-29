import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseUrl).then((res) => res.data);

const create = (newPhone) =>
  axios.post(baseUrl, newPhone).then((res) => res.data);

const update = (id, newPhone) =>
  axios.put(`${baseUrl}/${id}`, newPhone).then((res) => res.data);

const deleteNumber = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((res) => res);

const phoneService = {
  getAll,
  create,
  update,
  deleteNumber,
};

export default phoneService;
