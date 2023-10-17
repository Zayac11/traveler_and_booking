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
    }),
    tagTypes: ['Profile', 'Auction', 'RecentAuctions', 'AvailableChests'],
    endpoints: (builder) => ({}),
})
