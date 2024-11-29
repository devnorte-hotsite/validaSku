import styled from "styled-components"
import { CardCombos } from "../PageCombo/style"

export const ContainerKitValidatePage = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: 3.5rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
`

export const MessageWarning = styled.p`
    color: ${props => props.theme.colors.MessageWarning};
    font-size: 24px;    
`

export const ContainerCardsKit = styled(CardCombos)`
    flex-direction: column;
    h3, strong{
        color: ${props => props.theme.colors.primary};
    }    
`