import { TaskCard } from "@/entities";
import { Button, ButtonVariations, Error, ERRORS, ErrorVariations, HoverColorVariations, Input, InputVariations, ITask } from "@/shared";
import { tasksListApi } from "../api/api";

type Props = {
    task: ITask;
};

export const ListItem: React.FC<Props> = ({ task }) => {
    const [changeCompleted, { isLoading: changeCompletedLoading, error: changeCompletedError }] = tasksListApi.useChangeTaskCompletedMutation();
    const [deleteTask, { isLoading: deleteTaskLoading, error: deleteTaskError }] = tasksListApi.useDeleteTaskMutation();

    if (changeCompletedError) return <Error type={ErrorVariations.DEFAULT}>{ERRORS.UPDATE_DATA}</Error>;
    if (deleteTaskError) return <Error type={ErrorVariations.DEFAULT}>{ERRORS.DELETE_DATA}</Error>;

    return (
        <TaskCard
            key={task.id}
            id={task.id}
            completed={task.completed}
            isLoading={changeCompletedLoading || deleteTaskLoading}

            checkBox={
                <Input
                    type_={InputVariations.CHECK_BOX}
                    type="checkbox"
                    checked={task.completed}
                    onChange={async () => await changeCompleted({ id: task.id, completed: !task.completed })}
                />}

            button={
                <Button
                    hoverColor={HoverColorVariations.RED}
                    type_={ButtonVariations.BASIC}
                    onClick={async () => await deleteTask({ id: task.id })}
                >
                    Delete
                </Button>}
        >
            {task.title}
        </TaskCard>
    );
};