// import { useEffect, useState } from "react";
// import { 
//   Container, 
//   FormWrapper, 
//   SelectInput, 
//   InputTextSku, 
//   ButtonConsultSku, 
//   ValidationContent, 
//   Resultados, 
//   ErrorMessage, 
//   TituloApp 
// } from "./style";
// import { useLazyQuery } from "@apollo/client";
// import { QUERY_SKU_KIT_UNICO, QUERY_SKU_COMBO } from "../../graphQL/queries";
// import { BundleChildrenItem, QueryData, QueryVariables, ComboProducts } from "../../service/interface";

// export function SkuValidationForm() {
//   const [sku, setSku] = useState<string>("");
//   const [queryType, setQueryType] = useState<"Kit" | "Combo">("Kit");
//   const [validationResult, setValidationResult] = useState<
//     { type: "Kit"; data: BundleChildrenItem[] } | 
//     { type: "Combo"; data: ComboProducts[] } | 
//     null
//   >(null);

//   const [executeKitQuery, { loading: loadingKit, error: errorKit, data: dataKit }] =
//     useLazyQuery<QueryData, QueryVariables>(QUERY_SKU_KIT_UNICO);

//   const [executeComboQuery, { loading: loadingCombo, error: errorCombo, data: dataCombo }] =
//     useLazyQuery(QUERY_SKU_COMBO);

//   const handleValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (!sku.trim()) {
//       alert("Digite um SKU válido.");
//       return;
//     }

//     if (queryType === "Kit") {
//       executeKitQuery({ variables: { skuKit: sku } });
//     } else {
//       executeComboQuery({ variables: { skuCombo: sku } });
//     }
//   };  

//   const renderRelatedProducts = (relatedProducts: ComboProducts['related_products']) => {
//     if (!relatedProducts) {
//       return null;
//     }
  
//     return (
//       <div>
//         {relatedProducts.map((product, index) => {
//           // Verificação de tipo, para garantir que `product` tem a estrutura que esperamos
//           if (!product || !product.name || !product.sku || !product.small_image?.url) {
//             return null; // Se algum dos campos essenciais estiver faltando, não renderiza
//           }
  
//           return (
//             <div key={index}>
//               <p><strong>Nome:</strong> {product.name}</p>
//               <p><strong>Sku:</strong> {product.sku}</p>
//               <p><strong>Small Image:</strong> <img src={product.small_image.url} alt="Imagem do produto" /></p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   useEffect(() => {
//     if (dataKit?.bundleChildrenItems) {
//       setValidationResult({ type: "Kit", data: dataKit.bundleChildrenItems });
//     } else if (dataCombo?.products?.items) {
//       setValidationResult({ type: "Combo", data: dataCombo.products.items });
//     }
//   }, [dataKit, dataCombo]);

//   const isLoading = loadingKit || loadingCombo;
//   const error = errorKit || errorCombo;
//   console.log(error);
//   console.log(errorCombo);
  

//   return (
//     <Container>
//       <TituloApp>Validador de SKU</TituloApp>
//       <FormWrapper>
//         <SelectInput 
//           value={queryType} 
//           onChange={(e) => setQueryType(e.target.value as "Kit" | "Combo")}
//         >
//           <option value="Combo">Combo</option>
//           <option value="Kit">Kit</option>
//         </SelectInput>

//         <InputTextSku
//           type="text"
//           placeholder="Digite o SKU"
//           value={sku}
//           onChange={(e) => setSku(e.target.value)}
//         />

//         <ButtonConsultSku
//           type="submit"
//           onClick={handleValidation}
//           disabled={isLoading}
//         >
//           {isLoading ? "Validando..." : "Validar"}
//         </ButtonConsultSku>
//       </FormWrapper>

//       {error && <ErrorMessage>Erro: {error.message}</ErrorMessage>}

//       {validationResult && (
//         <ValidationContent>
          
//           <h3>Resultados:</h3>
//           {validationResult.data.length === 0 ? (
//             <p>Nenhum item encontrado com o SKU informado.</p>
//           ) : (
//             validationResult.data.map((item, index) => {
//               if (validationResult.type === "Kit") {
//                 const kitItem = item as BundleChildrenItem;
//                 return (
//                   <Resultados key={index}>
//                     <>
//                     <p><strong>Nome:</strong> {kitItem.name || "Faltando"}</p>
//                     <p><strong>SKU:</strong> {kitItem.sku || "Faltando"}</p>
//                     <p><strong>Preço Regular:</strong> {kitItem.regular_price ?? "Faltando"}</p>
//                     <p><strong>Preço Especial:</strong> {kitItem.special_price ?? "Faltando"}</p>
//                     <p><strong>Preço Prime:</strong> {kitItem.prime_price ?? "Faltando"}</p>
//                     </>
//                   </Resultados>
//                 );
//               } else if (validationResult.type === "Combo") {
//                 const comboItem = item as ComboProducts;
//                 return (
//                   <Resultados key={index}>
//                     <>
//                     <p><strong>Nome:</strong> {comboItem.name || "Faltando"}</p>
//                     <p><strong>URL:</strong> {comboItem.url_key || "Faltando"}</p>
//                     <p><strong>Qtd Test:</strong> {comboItem.qtd_test || "Faltando"}</p>
//                     <p><strong>Price Save:</strong> {comboItem.price_save || "Faltando"}</p>
//                     {comboItem.small_image?.url && <img src={comboItem.small_image.url} alt="Imagem do Produto" />}
//                     <p><strong>Price Installments:</strong> {comboItem.price_installments || "Faltando"}</p>
//                     <p><strong>price Suggested Installments:</strong> {comboItem.price_suggested_installments || "Faltando"}</p>
//                     <p><strong>Special Price:</strong> {comboItem.special_price || "Faltando"}</p>
//                     <p><strong>Price Range:</strong> {comboItem.price_range.minimum_price.final_price.value || "Faltando"}</p>
//                     {comboItem.image?.url && <img src={comboItem.image.url} alt="Imagem do Produto" />}
//                     <p><strong>Installments Price:</strong> {comboItem.installments.installment_price || "Faltando"}</p>
//                     <p><strong>Installments</strong> {comboItem.installments.installments || "Faltando"}</p>
//                     <p><strong>Installments Total Price:</strong> {comboItem.installments.total_price || "Faltando"}</p>
//                     <p><strong>label:</strong> {comboItem.label || "Faltando"}</p>
//                     {renderRelatedProducts(comboItem.related_products) || "Faltando"}
//                     </>
//                   </Resultados>
//                 );
//               }
//               return null;
//             })
//           )}
//         </ValidationContent>
//       )}
//     </Container>
//   );
// }
