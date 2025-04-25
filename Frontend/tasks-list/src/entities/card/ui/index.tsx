import { ReactNode } from "react";
import { BorderBlock, CardContainer, CheckBoxContainer, OptionalMenuContainer, TitleContainer } from "./card.styles";
import { useNavigate } from "react-router-dom";
import { Loader, LoaderVariations, ROUTES } from "@/shared";

type Props = {
    id: number;
    completed: boolean;
    isLoading: boolean;
    children: ReactNode;
    checkBox: ReactNode;
    button: ReactNode;
};

export const TaskCard: React.FC<Props> = ({ children, id, completed, checkBox, button, isLoading }) => {
    const navigate = useNavigate();


    if (isLoading) return (
        <CardContainer>
            <Loader type={LoaderVariations.SMALL} />
        </CardContainer>
    );


    return (
        <CardContainer>
            <CheckBoxContainer>
                {checkBox}
            </CheckBoxContainer>

            <BorderBlock />

            <TitleContainer onClick={() => navigate(`${ROUTES.EDIT_TASK}${id}`)} checked={completed}>
                {children}
            </TitleContainer>

            <BorderBlock />

            <OptionalMenuContainer>
                {button}
            </OptionalMenuContainer>
        </CardContainer>
    );
};