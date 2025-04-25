import { baseApi, ITask } from "@/shared";


export const editTaskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTask: builder.query<ITask, { id: number }>({
            query: ({ id }) => `/task/${id}`,
            providesTags: ['task'],
        }),
        editTask: builder.mutation<ITask, { id: number, title: string }>({
            query: ({ id, title }) => ({
                url: `/task/${id}`,
                method: 'PATCH',
                body: { title }
            }),
            invalidatesTags: ['task'],
        }),
    }),
    overrideExisting: true,
});