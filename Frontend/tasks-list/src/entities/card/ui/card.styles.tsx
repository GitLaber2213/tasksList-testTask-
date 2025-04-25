import styled from "styled-components";

type Props = {
    checked: boolean;
};

export const CardContainer = styled.div`
    max-width: 100%;
    height: 25px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    margin: 5px 0;
    padding: 10px;
    background-color: #686868;

    &:hover {
        cursor: pointer;
        background: #7a7a7a;
    }
`;

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const BorderBlock = styled.div`
    width: 2px;
    height: 25px;
    margin: 0 10px;
    background-color: #cccbcb;
`;


export const TitleContainer = styled.div<Props>`
    width: 100%;
    text-decoration: ${props => props.checked ? "line-through" : "none"};
`;

export const OptionalMenuContainer = styled.div`
    display: flex;
    min-width: 100px;
    height: 35px;

    align-items: center;
    margin-left: auto;
`;