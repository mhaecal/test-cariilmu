import axios from 'axios';

export default {
  getById: async (id) => {
    const res = await axios.get(`/public/instructor/${id}`);
    return res.data;
  }
};
