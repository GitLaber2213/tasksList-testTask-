import styled from "styled-components";

export const BasicInput = styled.input`
    height: 100%;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    padding: 2px;

`;

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
    position: relative;
    width: 20px;
    height: 20px;
    appearance: none;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease;

    &:focus {
        outline: 1px solid black;
    }

    &:checked:focus {
        outline: 1px solid white;
    }

    &:checked {
        background-color:rgb(90, 209, 110);
    }

    &:checked::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        transition: all 0.3s ease;
    }
`;