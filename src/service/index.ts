import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://magento.runningland.com.br/graphql",
    cache: new InMemoryCache()
})