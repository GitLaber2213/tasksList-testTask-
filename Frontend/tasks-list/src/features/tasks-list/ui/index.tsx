import { useNavigate } from "react-router-dom";
import { OptionalMenuContainer, TasksListContainer } from "./tasks-list.styles";
import { Button, ButtonVariations, Input, InputVariations, ITask, ROUTES, Scroll } from "@/shared";
import { TaskCard } from "@/entities";

export const TasksList = () => {
    const navigate = useNavigate();

    const items: ITask[] = [
        { id: 1, title: "Task 1", completed: true },
        { id: 2, title: "Task 2", completed: false },
        { id: 3, title: "Task 3", completed: true },
    ];


    return (
        <TasksListContainer>
            <OptionalMenuContainer>
                <Button type_={ButtonVariations.BASIC} onClick={() => navigate(ROUTES.CREATE_TASK)}>Add task</Button>
            </OptionalMenuContainer>
            <Scroll>
                {items.map(item =>
                    <TaskCard
                        key={item.id}
                        id={item.id}
                        completed={item.completed}
                        checkBox={<Input type_={InputVariations.CHECK_BOX} type="checkbox" checked={item.completed} />}
                        button={<Button type_={ButtonVariations.BASIC}>Delete</Button>}
                    >
                        {item.title}
                    </TaskCard>)}
            </Scroll>
        </TasksListContainer>
    )
}