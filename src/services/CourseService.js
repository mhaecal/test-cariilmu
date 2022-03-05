import axios from 'axios';

export default {
  getById: async (id) => {
    const res = await axios.get(`/public/course/${id}`);
    return res.data;
  }
};
