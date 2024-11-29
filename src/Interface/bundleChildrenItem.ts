export interface BundleChildrenItem {
    name: string | null;
    sku: string | null;
    regular_price: number | null;
    special_price: number | null;
    prime_price: number | null;
}

export interface QueryData {
    bundleChildrenItems: BundleChildrenItem[]
}