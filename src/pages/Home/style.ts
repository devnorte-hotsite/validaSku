import styled from "styled-components";


export const ContainerHome = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5rem;
    }
    h1{
        font-size: 24px;
        color: ${props => props.theme.colors.white};
        margin-bottom: 15px;
    }
`

export const ContentCardPage = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CardPages = styled.div`        
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;    
    gap: 20px;     
    max-width: 415px;    
`

export const ListPages = styled.li`    
    list-style: none;
    a{
        border: 1px solid ${props => props.theme.colors.primary};
        background: transparent;
        font-size: 22px;
        color: #4EA8DE;
        padding: 12px 18px;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        transition: all ease-in-out 0.4s;

        &:hover{
            border-radius: 0;
            background: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.white};
        }
    }
`

export const ContentImage = styled.div`
    height: 100%;
    width: auto;
    @media (max-width: 1300px){
        img{
            max-width: 700px;
        }
    }
    @media (max-width: 768px) {
        img{
            max-width: 415px;
            height: 100%;
            width: 100%;
        }
    }
`