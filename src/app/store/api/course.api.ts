import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICourse, ICourseDetails } from '../../../models/ICourse'

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
        getCourseById: builder.query<ICourseDetails, string>({
            query: (id) => ({
                url: `${import.meta.env.VITE_FETCH_COURSES}/${id}`,
                credentials: 'include',
            }),
            // providesTags: (result, error, id) => [{type:'Course', id}],
        }),
    }),
})

export const { useGetAllCoursesQuery, useGetCourseByIdQuery } = courseApi
