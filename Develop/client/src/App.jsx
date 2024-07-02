import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import App from './App';

// Create an http link
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Create an auth link
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create the Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const AppProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppProvider;
