import axios from 'axios';

export const ClassService = {
  getAll: async () => {
    const res = await axios.get('/public/course');
    // console.log(res.data);
    return res.data;
  }
};
