import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface getTokenResponse {
    token: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Token'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    endpoints: (builder) => ({
        getToken: builder.query<getTokenResponse, void>({
            query: () => ({
                url: import.meta.env.VITE_GET_TOKEN,
            }),
            providesTags: (result) => ['Token'],
        }),
    }),
})

export const { useGetTokenQuery } = authApi
