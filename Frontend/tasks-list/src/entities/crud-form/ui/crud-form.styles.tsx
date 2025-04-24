import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
    max-width: 500px;
    min-height: 200px;

`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    padding: 10px;
    
    border-radius: 10px;
    border: 1px solid #868686;
    background-color: #2e2e2e;
`;

export const InputContainer = styled.div`
    margin: 10px 0;
`;

export const OptionalMenuContainer = styled.div`
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: space-between;
    
    gap: 100px;
    margin-top: 10px;
`;
