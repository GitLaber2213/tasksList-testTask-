import { baseApi, ITask } from "@/shared";



export const createTaskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTask: builder.mutation<ITask, { title: string }>({
            query: ({ title }) => ({
                url: '/task',
                method: 'POST',
                body: { 
                    title,
                    completed: false 
                }
            }),
            invalidatesTags: ['task'],
        }),
    }),
    overrideExisting: true,
});