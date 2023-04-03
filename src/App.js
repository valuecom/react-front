import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  _Header,
  _Footer,
  Page_Home,
  Page_WeAreTrusted,
  Page_WeTeam,
  Page_Contact
} from "./components";

function App() {
  return (
    <HelmetProvider>
          <Helmet>
              <title>VALUECOM | React</title>
          </Helmet>
          <BrowserRouter>
              <_Header />
              <main id="content">
                <Routes>
                  <Route exact path="/" element={<Page_Home /> } />
                  <Route exact path="/we-are-trusted" element={ <Page_WeAreTrusted /> } />
                  <Route exact path="/we-team" element={ <Page_WeTeam /> } />
                  <Route exact path="/contact" element={ <Page_Contact /> } />
                </Routes>
              </main>
              <_Footer />
          </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;