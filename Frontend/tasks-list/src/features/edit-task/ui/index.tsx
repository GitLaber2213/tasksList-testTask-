import { CRUDForm } from "@/entities";
import { Button, ButtonVariations, Error, ERRORS, ErrorVariations, Input, InputVariations, ITask, Loader, LoaderVariations, ROUTES } from "@/shared";
import { useForm } from "react-hook-form";
import { editTaskApi } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

export const EditTask = () => {
    const navigate = useNavigate();
    const params = useParams();
    const taskId = parseInt(params.id || "null", 10);

    const { data: task, isLoading: getTaskLoading, error: getTaskError } = editTaskApi.useGetTaskQuery({ id: taskId });
    const [editTask, { isLoading: editTaskLoading, error: editTaskError }] = editTaskApi.useEditTaskMutation();

    const { register, handleSubmit, setValue, formState } = useForm<ITask>({
        mode: "onSubmit",
    });
    const onSubmit = async (data: ITask) => {
        await editTask({ id: taskId, title: data.title });
        if (!editTaskLoading) {
            navigate(ROUTES.MAIN);
        };
    };


    if (getTaskLoading || editTaskLoading) {
        return (
            <Loader type={LoaderVariations.DEFAULT} />
        );
    } else if (!getTaskLoading) {
        setValue("title", task?.title || "");
    };

    if (getTaskError) {
        return <Error type={ErrorVariations.DEFAULT}>{ERRORS.GET_DATA}</Error>;
    } else if (editTaskError) {
        return <Error type={ErrorVariations.DEFAULT}>{ERRORS.UPDATE_DATA}</Error>
    };


    return (
        <CRUDForm
            onSubmit={handleSubmit(onSubmit)}
            submitButton={<Button type_={ButtonVariations.BASIC} type="submit">Edit</Button>}
        >
            <span>Task title: </span>
            <Input
                type_={InputVariations.BASIC}
                {...register("title", {
                    required: ERRORS.INPUT
                })}
                type="text" />
            {formState.errors.title && <Error type={ErrorVariations.INPUT}>{formState.errors.title.message}</Error>}
        </CRUDForm>
    );
};