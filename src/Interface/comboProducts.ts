export interface ComboProducts{
    name: string | null;
    url_key: string | null;
    qtd_test: string | null;
    price_save: number | null;

    small_image: {
        url: string | null;
    };

    price_installments: string | null;
    price_suggested_installments: string | null;
    special_price: number | null;
    

    price_range: {
        minimum_price:{        
            final_price:{
                value: number | string
            };
        };

    };

    image: {
        url: string | null
    }
    
    installments: {
        installment_price: number;
        installments: number;
        total_price: number;
    };

    label: string | null;
    related_products: Array<
        {
            name: string | null;
            sku: string | null;
            small_image: {
                url: string | null;
            }
        }
    >

}