import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICourse } from '../../../models/ICourse'

export interface getCoursesResponse {
    courses: ICourse[]
}

export const courseApi = createApi({
    reducerPath: 'courseApi',
    tagTypes: ['Course'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set(
                'authorization',
                `Bearer ${localStorage.getItem('token')}`,
            )
            return headers
        },
    }),
    endpoints: (builder) => ({
        getAllCourses: builder.query<getCoursesResponse, void>({
            query: () => ({
                url: import.meta.env.VITE_FETCH_COURSES,
            }),
            providesTags: (result) => ['Course'],
        }),
    }),
})

export const { useGetAllCoursesQuery } = courseApi
