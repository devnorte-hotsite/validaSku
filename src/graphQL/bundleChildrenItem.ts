import { gql } from "@apollo/client";

export const QUERY_SKU_KIT_UNICO = gql`
  query($skuKit: String!) {
    bundleChildrenItems(sku: $skuKit) {
      name
      sku
      regular_price
      special_price
      prime_price
    }
  }
`;