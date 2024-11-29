import { ContainerHome, ListPages, CardPages, ContentImage } from "./style";
import { Link } from "react-router-dom";
import  imageTapume  from "../../assets/imageTapume.jpg"


export function Home (){

    const linksSkus = [
        {path: "/sku/kit", name: "Kit" },
        {path: "/sku/combo", name: "Combo" },        
    ]


    return(
        <ContainerHome>
            <ContentImage>
                <img src={imageTapume}/>
            </ContentImage>            
            <CardPages>
                <h1>Validador de SKU</h1>                
                    {linksSkus.map((sku) => (
                    <ListPages key={sku.path}>                        
                        <Link to={`${sku.path}`}>{sku.name}</Link>
                    </ListPages>
                ))}
            </CardPages>
        </ContainerHome>
    )

}