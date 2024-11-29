import { gql } from "@apollo/client";

export const QUERY_SKU_COMBO = gql`
  query($skuCombo: String) {
    products(filter: { sku: { eq: $skuCombo } }) {
      items {
        name
        url_key
        qtd_test
        price_save
        small_image {
          url
        }
        price_installments
        price_suggested_installments
        special_price
        image {
          url
        }
        price_range {
          minimum_price {
            final_price {
              value
            }
          }
        }
        installments {
          installment_price
          installments
          total_price
        }
        label
        related_products {
          name
          sku
          qtd_test
          price_save
          small_image {
            url
          }
          special_price
          label
          related_products {
            name
            sku
            small_image {
              url
            }
          }
        }
      }
    }
  }
`;
