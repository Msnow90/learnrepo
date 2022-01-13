import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/students'}),
    endpoints: (builder) => ({


        getStudentByName: builder.query({
            query: (name) => `/name/${name}`
        }),


        getStudents: builder.query({
            query: () => '/',
            providesTags: ['Students']
        }),



        updateStudent: builder.mutation({

            query(data) {
                const { studentId, updatedStudent } = data;

                return {
                    url: `/${studentId}`,
                    method: 'POST',
                    body: updatedStudent
                }
            },

            invalidatesTags:['Students']

        })


    })
})

export const { useGetStudentByNameQuery, useGetStudentsQuery, useUpdateStudentMutation } = studentApi;