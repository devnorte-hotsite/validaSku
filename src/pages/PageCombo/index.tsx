import { ContainerCombo, ContentResultados, CardCombos, FormContent, TituloModuloPage, CardImages, ContainerCards, CardDescription, CardPrices, CardInstallments, LabelImage, FooterCardQtdPrice, PriceCardDesciption } from "./style";
import { InputTextSku, ButtonConsultSku } from "../../components/Form/style";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_SKU_COMBO } from "../../graphQL/combo";
import { ComboProducts } from "../../Interface/comboProducts";

export function SkuCombo() {
  const [skuCombo, setSkuCombo] = useState<string>("");
  const [getCombo, { loading, data, error }] = useLazyQuery(QUERY_SKU_COMBO);

  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!skuCombo.trim()) {
      alert("Inserir um SKU válido");
      return;
    }
    getCombo({ variables: { skuCombo } });
  };

  const renderRelatedProducts = (
    relatedProducts: ComboProducts["related_products"]
  ) => {    
    if (!Array.isArray(relatedProducts) || relatedProducts.length === 0) {
      return <p>Nenhum produto relacionado.</p>;
    }

    return (
      <div>
        {relatedProducts.map((product, index) => {          
          if (!product || !product.name || !product.sku || !product.small_image?.url) {
            return null;
          }

          return (
            <div key={index} style={{ marginBottom: "1em" }}>
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "2rem" }}>
                <strong>Small Image:</strong>
                <img src={product.small_image.url} style={{ maxHeight: "160px", maxWidth: "160px" }} alt={product.name || "Imagem do produto"} />
              </div>
              <p><strong>Nome:</strong> {product.name}</p>
              <p><strong>Sku:</strong> {product.sku}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <ContainerCombo>
      <TituloModuloPage>Validador de SKU combo</TituloModuloPage>
      <FormContent onSubmit={handleValidation}>
        <InputTextSku
          type="text"
          value={skuCombo}
          placeholder="Digite o SKU"
          onChange={(e) => setSkuCombo(e.target.value)}
        />

        <ButtonConsultSku type="submit" disabled={loading}>
          {loading ? "Validando..." : "Validar"}
        </ButtonConsultSku>
      </FormContent>

      {error && <p>Erro ao buscar dados: {error.message}</p>}

      {data && data.products?.items?.length > 0 ? (
        <ContentResultados>
          {data.products.items.map((item: any, index: number) => {
            if (!item) {
              return <p key={index}>Item inválido.</p>;
            }

            return (
              <ContainerCards key={index}>
                <CardCombos>                    
                    {item.small_image?.url && (
                        <CardImages>                            
                            <img src={item.small_image.url} alt="Imagem do produto" />
                        </CardImages>
                    )}
                    <CardDescription>
                        <p><strong>Nome:</strong> {item.name || "Faltando"}</p>
                        <p><strong>URL Key:</strong> {item.url_key || "Faltando"}</p>
                        <FooterCardQtdPrice>
                            <p><strong>Qtd Test:</strong> {item.qtd_test || "Faltando"}</p>
                            <p><strong>Price Save:</strong> {item.price_save || "Faltando"}</p>
                        </FooterCardQtdPrice>
                    </CardDescription>
                </CardCombos>     
                <CardPrices>      
                    <h3>Price Card</h3>          
                    <PriceCardDesciption>                    
                        <p><strong>Price Installments:</strong> <span>{item.price_installments || "Faltando"}</span></p>
                        <p><strong>Price Suggested Installments:</strong> <span>{item.price_suggested_installments || "Faltando"}</span></p>
                        <p>
                            <strong>Special Price:</strong>{" "}
                            <span>{item.special_price || "Faltando"}</span>
                        </p>

                        <p>
                            <strong>Price Range:</strong>{" "}
                            {item.price_range?.minimum_price?.final_price?.value || "Faltando"}
                        </p>
                    </PriceCardDesciption>
                </CardPrices>        

                <CardInstallments>
                    <h3>Installments:</h3>
                    {item.installments && item.installments.length > 0 ? (
                        item.installments.map((installment: any, index: number) => (
                        <div key={index}>
                            <p><strong>Installment Price:</strong> {installment.installment_price.toFixed(2) || "Faltando"}</p>
                            <p><strong>Installments:</strong> {installment.installments.toFixed(2) || "Faltando"}</p>
                            <p><strong>Total Price:</strong> {installment.total_price.toFixed(2) || "Faltando"}</p>
                        </div>
                        ))
                    ) : (
                        <p>Sem informações de parcelas.</p>
                    )}
                </CardInstallments>

                <LabelImage>
                    {item.related_products ? (
                    renderRelatedProducts(item.related_products)
                        
                    ) : (
                    <p>Sem produtos relacionados.</p>
                    )}
                    <div>
                        <strong>URL Image:</strong>
                        <p>{item.image?.url || "Faltando"}</p>

                        <p>
                            <strong>Label:</strong> {item.label.replace("-", "") || "Faltando"}
                        </p>
                    </div>

                    
                </LabelImage>
              </ContainerCards>
            );
          })}
        </ContentResultados>
      ) : (
        data && <p>Nenhum resultado encontrado.</p>
      )}
    </ContainerCombo>
  );
}
