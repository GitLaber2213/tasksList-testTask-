import styled from "styled-components";

export const TasksListContainer = styled.div`
    width: 80%;
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 10px;
    border: 1px solid #868686;
    background-color: #2e2e2e;
    border-radius: 10px;
`;

export const OptionalMenuContainer = styled.div`
    display: flex;
    max-width: 100px;
    height: 35px;
    align-items: center;
    margin-bottom: 5px;
`;