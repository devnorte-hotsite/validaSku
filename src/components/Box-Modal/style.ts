import styled from "styled-components";



export const Container = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

export const TituloApp = styled("h3")`
    font-size: 28px;    
    margin: 40px 0 20px;
    color: ${props => props.theme.colors.primary};
`

export const SelectInput = styled("select")`
    height: 45px;
    padding: 0 12px;
    border-radius: 8px;
    border: none;
    max-width: 250px;
    width: 100%;
    outline: none;
    background: ${props => props.theme.colors.greyBg};
    color: ${props => props.theme.colors.white};
`

export const ValidationContent = styled("div")`
    margin-top: 30px;
    max-width: 500px;
    width: 100%;

    h3{
        color: ${props => props.theme.colors.primary};
        font-size: 24px;
    }
`

export const Resultados = styled("div")`
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
`

export const ErrorMessage = styled("p")`
    color: ${props => props.theme.colors.redDanger};
    font-size: 18px;
    margin-top: 10px;
`