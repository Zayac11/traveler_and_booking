import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const $api = axios.create({
    baseURL: import.meta.env.BACKEND_API_URL,
    withCredentials: true,
})

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.BACKEND_API_URL,
        credentials: 'include', // for cookies
        prepareHeaders: async (headers, { type }) => {
            if (type === 'query' || __MODE__ === 'jest') return headers
            const { data } = await $api.get('api/csrf/')
            headers.set('X-CSRFToken', data.csrfToken)
            return headers
        },
    }),
    tagTypes: ['Profile', 'Auction', 'RecentAuctions', 'AvailableChests'],
    endpoints: (builder) => ({}),
})
