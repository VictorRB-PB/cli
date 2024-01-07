import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    heigh: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-otems: center;
    margin-bottom: 10px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    border: 0;
    height: 30px;
    width: 100%;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`