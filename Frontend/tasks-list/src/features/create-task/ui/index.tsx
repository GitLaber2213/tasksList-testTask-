import { CRUDForm } from "@/entities";
import { Button, ButtonVariations, Input, InputVariations } from "@/shared";



export const CreateTask = () => {
    return (
        <CRUDForm
            onSubmit={(event) => { event.preventDefault() }}
            submitButton={<Button type_={ButtonVariations.BASIC} type="submit">Add</Button>}
        >
            <span>Task title: </span><Input type_={InputVariations.BASIC} type="text" />
        </CRUDForm>
    );
};