import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  _Header,
  _Footer,
  Page_Home,
  Page_WeAreTrusted
} from "./components";

function App() {
  return (
    <HelmetProvider>
          <Helmet>
              <title>VALUECOM</title>
          </Helmet>
          <BrowserRouter>
              <_Header />
              <main id="content">
                <Routes>
                  <Route exact path="/" element={<Page_Home /> } />
                  <Route exact path="/we-are-trusted" element={ <Page_WeAreTrusted /> } />
                </Routes>
              </main>
              <_Footer />
          </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;