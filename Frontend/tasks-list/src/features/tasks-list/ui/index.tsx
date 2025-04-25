import { useNavigate } from "react-router-dom";
import { OptionalMenuContainer, TasksListContainer } from "./tasks-list.styles";
import { Button, ButtonVariations, Error, ERRORS, ErrorVariations, Loader, LoaderVariations, ROUTES, Scroll } from "@/shared";
import { tasksListApi } from "../api/api";
import { ListItem } from "./list-item";

export const TasksList = () => {
    const navigate = useNavigate();

    const { data: tasks, isLoading: getTasksLoaing, error: getTasksError } = tasksListApi.useGetTasksListQuery();

    if (getTasksLoaing) return (
        <TasksListContainer>
            <Loader type={LoaderVariations.DEFAULT} />
        </TasksListContainer>
    );

    if(getTasksError) return (
        <TasksListContainer>
            <Error type={ErrorVariations.DEFAULT}>{ERRORS.GET_DATA}</Error>
        </TasksListContainer>
    );

    return (
        <TasksListContainer>
            <OptionalMenuContainer>
                <Button type_={ButtonVariations.BASIC} onClick={() => navigate(ROUTES.CREATE_TASK)}>Add task</Button>
            </OptionalMenuContainer>

            <Scroll>
                {tasks?.map(task => <ListItem key={task.id} task={task} />)}
            </Scroll>
        </TasksListContainer>
    );
};