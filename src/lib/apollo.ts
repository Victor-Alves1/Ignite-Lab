import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omo8ep0dq901xndgjq3ypt/master',
    cache: new InMemoryCache()
})