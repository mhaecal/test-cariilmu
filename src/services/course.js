import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.cariilmu.co.id/api/v1/' }),
  endpoints: (builder) => ({
    getCourseById: builder.query({
      query: (id) => `public/course/${id}`,
      transformResponse: (response) => response.data
    })
  })
});

export const { useGetCourseByIdQuery } = courseApi;
