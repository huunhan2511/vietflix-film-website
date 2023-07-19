import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './App';
import {defaultTheme, Provider} from '@adobe/react-spectrum';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
} from "@apollo/client";
const currentDate = new Date();
var client;
if(currentDate.getDate() > 19){
  client = new ApolloClient({
    uri: `${process.env.REACT_APP_GRAPHQL}`,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        nextFetchPolicy: 'cache-first',
      },
    },
  });
}else{
  console.log("RAILWAY")
  client = new ApolloClient({
    uri: `${process.env.REACT_APP_GRAPHQL_RAILWAY}`,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        nextFetchPolicy: 'cache-first',
      },
    },
  });
}

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
