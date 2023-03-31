import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  _Header,
  Page_Home,
  Page_WeAreTrusted
} from "./components";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
          <Helmet>
              <title>VALUECOM</title>
              <meta name="description" content="Helmet application" />
          </Helmet>
          <BrowserRouter>
              <_Header />
              <Routes>
                <Route exact path="/" element={<Page_Home /> } />
                <Route exact path="/we-are-trusted" element={ <Page_WeAreTrusted /> } />
              </Routes>
          </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;