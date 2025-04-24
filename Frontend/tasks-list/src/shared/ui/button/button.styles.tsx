import styled from "styled-components";



export const BasicButton = styled.button`
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
        cursor: pointer;
        background-color:rgb(90, 209, 110);
    }
`;