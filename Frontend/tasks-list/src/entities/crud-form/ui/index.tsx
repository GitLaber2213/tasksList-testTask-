import { useNavigate } from "react-router-dom";
import { Button, ButtonVariations, HoverColorVariations, ROUTES } from "@/shared";
import { Form, FormContainer, InputContainer, OptionalMenuContainer } from "./crud-form.styles";


type Props = {
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent) => void;
    submitButton: React.ReactNode;
};

export const CRUDForm: React.FC<Props> = ({ children, onSubmit, submitButton}) => {
    const navigate = useNavigate();
    
    return (
        <FormContainer>
            <Form onSubmit={onSubmit}>
                <InputContainer>
                    {children}
                </InputContainer>
                
                <OptionalMenuContainer>
                    <Button hoverColor={HoverColorVariations.RED} type_={ButtonVariations.BASIC} type="button" onClick={() => navigate(ROUTES.MAIN)}><span>&#8592; Back</span></Button>
                    {submitButton}
                </OptionalMenuContainer>
            </Form>
        </FormContainer>
    );
};