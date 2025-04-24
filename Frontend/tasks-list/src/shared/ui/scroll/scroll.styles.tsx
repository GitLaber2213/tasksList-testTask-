import styled from "styled-components";



export const ScrollContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 2px;
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &:hover&::-webkit-scrollbar-thumb {
        background-color: #d1d1d1;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #d1d1d1;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;