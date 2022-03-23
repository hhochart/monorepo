import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
  })
  const cache = new InMemoryCache()

  let apolloClient
  if (process.server) {
    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
      ssrMode: false
    })
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload.data['apollo-data'] = apolloClient.extract()
    })
  } else {
    cache.restore(
      JSON.parse(JSON.stringify(nuxtApp.payload.data['apollo-data']))
    )

    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
      ssrForceFetchDelay: 100
    })
  }
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
