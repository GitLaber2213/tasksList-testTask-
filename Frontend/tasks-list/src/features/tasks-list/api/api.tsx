import { baseApi, ITask } from "@/shared";


export const tasksListApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTasksList: builder.query<ITask[], void>({
            query: () => `/task`,
            providesTags: ['task'],
        }),
        changeTaskCompleted: builder.mutation<ITask, { id: number, completed: boolean }>({
            query: ({ id, completed }) => ({
                url: `/task/${id}`,
                method: 'PATCH',
                body: { completed }
            }),
            invalidatesTags: ['task'],
        }),
        deleteTask: builder.mutation<ITask, { id: number }>({
            query: ({ id }) => ({
                url: `/task/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['task'],
        }),
    }),
    overrideExisting: true
});