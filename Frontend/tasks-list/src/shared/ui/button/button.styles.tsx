import styled from "styled-components";
import { HoverColorVariations } from "./hover-color-variations";

type Props = { $hoverColor?: HoverColorVariations };

export const BasicButton = styled.button<Props>`
    width: 100%;
    height: 100%;
    
    outline: none;
    border: none;
    font-weight: bold;

    border-radius: 5px;
    padding: 5px 15px;
    
    background-color: #999999;

    &:focus {
        outline: 1px solid white;
    }

    &:hover {
        background-color:rgb(90, 209, 110);
        ${({ $hoverColor }) => $hoverColor === HoverColorVariations.GREEN && `background-color:rgb(90, 209, 110);`}
        ${({ $hoverColor }) => $hoverColor === HoverColorVariations.RED && `background-color: tomato;`}
        cursor: pointer;
    }
`;