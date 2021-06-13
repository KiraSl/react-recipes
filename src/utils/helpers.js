import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const api = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

export const query = (q) =>
  api.query({
    query: gql`
      ${q}
    `,
  })
