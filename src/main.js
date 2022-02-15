import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:8000/graphql',
})

import { createApolloProvider } from '@vue/apollo-option'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
    render: () => h(App),
  })
  
    app.use(apolloProvider)
    app.use(store)
    app.use(router)
    app.mount('#app')

// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'http://localhost:3020/graphql',
// })

// // Cache implementation
// const cache = new InMemoryCache()

// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })