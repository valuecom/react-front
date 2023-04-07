import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// for bootstrap css goto pulic/index.html
// my custom copy from cdn
// import './assets/css/bootstrap.min.css?v=1';

// npm install bootstrap
// import 'bootstrap/dist/css/bootstrap.css';


// import './assets/css/style.css?v=1';


const client = new ApolloClient({
  uri: "http://localhost/GitHubVC/newsite2023.valuecom.gr/graphql",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
