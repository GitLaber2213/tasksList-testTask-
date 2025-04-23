export class CreateTaskDto {
    title: string;
    completed: boolean;
}

export type UpdateTaskDto = Partial<CreateTaskDto>;