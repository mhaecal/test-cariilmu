import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const instructorApi = createApi({
  reducerPath: 'instructorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.cariilmu.co.id/api/v1/' }),
  endpoints: (builder) => ({
    getInstructorById: builder.query({
      query: (id) => `public/instructor/${id}`,
      transformResponse: (response) => response.data
    })
  })
});

export const { useGetInstructorByIdQuery } = instructorApi;
