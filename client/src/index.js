import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {defaultTheme, Provider} from '@adobe/react-spectrum';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL}`,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>
    <Provider theme={defaultTheme} colorScheme="dark">
      
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);
