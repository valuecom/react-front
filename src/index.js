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

// 

let __uri = "";
console.log('---'); 
console.log(process.env);
if (process.env.NODE_ENV == 'development') {
  // development build code
    __uri = "http://localhost/GitHubVC/newsite2023.valuecom.gr/graphql";
  console.log('Dev'); 
} else {
    __uri = "https://newsite2023.valuecom.gr/backend/graphql"; 
  console.log('Prod');
}

const client = new ApolloClient({
  uri: __uri,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
