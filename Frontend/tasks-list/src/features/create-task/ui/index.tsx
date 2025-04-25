import { CRUDForm } from "@/entities";
import { Button, ButtonVariations, Error, ERRORS, ErrorVariations, Input, InputVariations, ITask, Loader, LoaderVariations, ROUTES } from "@/shared";
import { createTaskApi } from "../api/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export const CreateTask = () => {
    const navigate = useNavigate();
    const [createTask, { isLoading: createTaskLoading, error: createTaskError }] = createTaskApi.useCreateTaskMutation();

    const { register, handleSubmit, formState } = useForm<ITask>({
        mode: "onChange",
    });

    const onSubmit = async (data: ITask) => {
        await createTask(data);
        if (!createTaskLoading) {
            navigate(ROUTES.MAIN);
        };
    };

    if (createTaskError) return <Error type={ErrorVariations.DEFAULT}>{ERRORS.ADD_DATA}</Error>;

    return (
        <CRUDForm
            onSubmit={handleSubmit(onSubmit)}
            submitButton={
                <Button
                    type_={ButtonVariations.BASIC}
                    type="submit"
                >
                    {createTaskLoading ? <Loader type={LoaderVariations.SMALL} /> : "Add"}
                </Button>}
        >
            <span>Task title: </span>
            <Input
                type_={InputVariations.BASIC}
                type="text"
                {...register("title", {
                    required: ERRORS.INPUT,
                })}
            />
            {formState.errors.title && <Error type={ErrorVariations.INPUT}>{formState.errors.title.message}</Error>}
        </CRUDForm>
    );
};