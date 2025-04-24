import { CRUDForm } from "@/entities";
import { Button, ButtonVariations, Input, InputVariations } from "@/shared";

export const EditTask = () => {
    return (
        <CRUDForm
            onSubmit={(event) => { event.preventDefault() }}
            submitButton={<Button type_={ButtonVariations.BASIC} type="submit">Edit</Button>}
        >
            <span>Task title: </span><Input type_={InputVariations.BASIC} type="text" />
        </CRUDForm>
    );
};