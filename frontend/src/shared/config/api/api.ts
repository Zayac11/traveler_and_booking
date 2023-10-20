import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const $api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

console.log(import.meta.env.VITE_API_URL)

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: async (headers, { type }) => {
            const token = localStorage.getItem('accessToken')
            if (token) {
                headers.set('Authorization', 'Bearer ' + token)
            }
            return headers
        },
    }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({}),
})
