import { useState } from "react";
import { ButtonConsultSku, FormWrapper, InputTextSku } from "../../components/Form/style";
import { ContainerCardsKit, ContainerKitValidatePage, MessageWarning } from "./style";
import { useLazyQuery } from "@apollo/client";
import { QUERY_SKU_KIT_UNICO } from "../../graphQL/bundleChildrenItem";


export function SkuKit (){    

    const [skuKit, setSkuKit] = useState<string>("")
    const [getKitData, { loading, data, error }] = useLazyQuery(QUERY_SKU_KIT_UNICO);

    const handleValidationKit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!skuKit.trim()) {
          alert("Inserir um SKU válido");
          return;
        }
        getKitData({ variables: { skuKit } });
    };


    return(
        <ContainerKitValidatePage>
            <h2>Validador de SKU Kit</h2>
            <FormWrapper onSubmit={handleValidationKit}>
                <InputTextSku 
                    type="text"
                    value={skuKit}
                    placeholder="Digite o SKU"
                    onChange={(e) => setSkuKit(e.target.value)}
                />
        
                <ButtonConsultSku type="submit" disabled={loading}>
                    {loading ? "Validando" : "Validar"}
                </ButtonConsultSku>
            </FormWrapper>

            {error && <MessageWarning>Erro ao buscar dados: {error.message}</MessageWarning>}

            {data && data.bundleChildrenItems?.length > 0 ? (
                <ContainerCardsKit>
                    <h3>Resultados:</h3>
                    {data.bundleChildrenItems.map((item: any, index: number) => (
                    <div key={index} style={{ marginBottom: "1em" }}>
                        <p><strong>Nome:</strong> {item.name || "Faltando"}</p>
                        <p><strong>SKU:</strong> {item.sku || "Faltando"}</p>
                        <p><strong>Preço Regular:</strong> {item.regular_price || "Faltando"}</p>
                        <p><strong>Preço Especial:</strong> {item.special_price || "Faltando"}</p>
                        <p><strong>Preço Prime:</strong> {item.prime_price || "Faltando"}</p>
                    </div>
            ))}
                </ContainerCardsKit>
            ) : (
                data && <p>Nenhum resultado encontrado para o SKU fornecido.</p>
            )}
        </ContainerKitValidatePage>
    )    
}