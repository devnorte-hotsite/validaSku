import styled from "styled-components"

export const FormWrapper = styled("form")`
    display: flex;
    flex-direction: column;
    gap: 15px;    
    align-items: center;    
    justify-content: center;
    width: 320px;
    height: 265px;
    padding: 12px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 8px;
`

export const InputTextSku = styled("input")`
    background: ${props => props.theme.colors.greyBg};
    color: ${props => props.theme.colors.white};
    height: 45px;
    max-width: 250px;
    width: 100%;
    border-radius: 8px;
    outline: none;
    padding: 0 12px;
    border: none;
`

export const ButtonConsultSku = styled("button")`
    width: 180px;
    padding: 8px 12px;
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    background: transparent;
    border-radius: 6px;
    transition: all ease-in 0.3s;

    &:hover{
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        border-radius: 0;
    }
    
`