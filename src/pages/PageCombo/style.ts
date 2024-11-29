import styled from "styled-components"

export const ContainerCombo = styled.div`    
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
    gap: 35px;
    max-width: 1500px;
    margin: 3rem auto 0 auto;
`

export const FormContent = styled.form`    
    max-height: 450px;
    max-width: 450px;
    width: 100%;
    height: 100%;    
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`

export const TituloModuloPage = styled.h2 `
    color: ${props => props.theme.colors.white};
    font-size: 28px;
`

export const ContentResultados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    h3{
        color: ${props => props.theme.colors.primary};
    }
`

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    gap: 4rem;
    @media (max-width: 768px) {
        max-width: 415px;
    }
`

export const CardCombos = styled.div`
    background: ${props => props.theme.colors.modalBox};
    max-width: 470px;
    max-height: 545px;
    border-radius: 8px;
    gap: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    flex-direction: column;
    border: 1px solid ${props => props.theme.colors.white};
`

export const CardImages = styled.div`
    img{
        border-radius: 8px;
        max-width: 350px;
        max-height: 260px;
    }
`

export const CardDescription = styled.div`
    width: 100%;
    strong{
        color: ${props => props.theme.colors.primary};
    }
`

export const FooterCardQtdPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`

export const CardPrices = styled.div`
    max-height: 545px;
    max-width: 470px;
    border: 1px solid ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.modalBox};
    padding: 16px;
    border-radius: 8px;
    h3{
        text-align: center;
    }
`

export const PriceCardDesciption = styled.div`
    margin-top: 24px;
    p{  
        span{
            margin-left: 8px;
        }
        strong{
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const CardInstallments = styled.div`
    max-height: 545px;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;
    border: 1px solid ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.modalBox};
    padding: 16px;
    border-radius: 8px;
    @media (max-width: 768px) {
        max-height: 100%;
    }
    strong{
        color: ${props => props.theme.colors.primary};
    }
`

export const LabelImage = styled.div`
    background: ${props => props.theme.colors.modalBox};
    border: 1px solid ${props => props.theme.colors.white};
    padding: 16px;
    max-width: 450px;
    border-radius: 8px;  
    @media (max-width: 768px) {
        max-height: 100%;
        max-width: 400px;
    }
    strong{
        color: ${props => props.theme.colors.primary};
    }
    p, span {
        word-wrap: break-word; /* Quebra as palavras longas */
        overflow-wrap: break-word; /* Compatibilidade com navegadores mais novos */
    }

`