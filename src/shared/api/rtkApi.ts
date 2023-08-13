// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import 'isomorphic-fetch'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/lodalStorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({}),
})
