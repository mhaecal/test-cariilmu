import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { instructorApi } from '../services/instructor';
import { courseApi } from '../services/course';

export const store = configureStore({
  reducer: {
    [instructorApi.reducerPath]: instructorApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(instructorApi.middleware, courseApi.middleware)
});

setupListeners(store.dispatch);
