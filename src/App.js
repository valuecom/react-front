import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery, gql } from "@apollo/client";
import __GraphQL_Queries from "./components/__GraphQL_Queries";
import {
  _Header,
  _Footer,
  Page_Home,
  Page_WeAreTrusted,
  Page_WeDeliver,
  Page_TheTeam,
  Page_Contact,

  Page_CreativeReviews,
  Page_TemplateCreativeReview,

  Page_TemplatePoject,
  Page_TemplateSimple,

  _AnimationLayout,

  Tool_EditPage
} from "./components";


import 'bootstrap/dist/css/bootstrap.css';


const PageComponentsMap_slug_component = {
  'we-are-trusted': Page_WeAreTrusted, 
  'we-deliver': Page_WeDeliver, 
  'the-team': Page_TheTeam,
  'contact': Page_Contact,
  'creative-reviews': Page_CreativeReviews

  // all other slugs go to - > 
  // Page_TemplateSimple, 
  // Page_TemplatePoject, 
  // Page_TemplateCreativeReview according to their parent
}

 ;

let current_pathname = window.location.pathname;

if (current_pathname.substr(current_pathname.length - 1)!="/"){
  current_pathname+="/";
}

console.log(current_pathname);
let GET_MAIN_QUERY = null;


const caching_type = 'all site';
// const caching_type = 'main queries';
// const caching_type = 'none';

if (caching_type == 'all site'){
      // caching all site
      GET_MAIN_QUERY = gql`query GET_ALL_PAGES
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
        ${__GraphQL_Queries.queries.homePage}
        ${__GraphQL_Queries.queries.weAreTrusted}
        ${__GraphQL_Queries.queries.weDeliver}
        ${__GraphQL_Queries.queries.theTeam}
        ${__GraphQL_Queries.queries.creativeReviews}
      }`;

}else if (caching_type == 'main queries') {
  // caching three main queries
  switch (current_pathname) {
    case '/': // homepage
      GET_MAIN_QUERY = gql`query GET_SITEMAP_AND_MENU_AND_HOME
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
        ${__GraphQL_Queries.queries.homePage}
      }`;
      break;
    case '/we-are-trusted/': // homepage
      GET_MAIN_QUERY = gql`query GET_SITEMAP_AND_MENU_AND_WE_ARE_TRUSTED
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
        ${__GraphQL_Queries.queries.weAreTrusted}
      }`;
      break;
    case '/we-deliver/': // homepage
      GET_MAIN_QUERY = gql`query GET_SITEMAP_AND_MENU_AND_WE_DELIVER
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
        ${__GraphQL_Queries.queries.weDeliver}
      }`;
      break;
    case '/the-team/': // homepage
      GET_MAIN_QUERY = gql`query GET_SITEMAP_AND_MENU_AND_WE_TEAM
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
        ${__GraphQL_Queries.queries.theTeam}
      }`;
      break;
    case '/creative-reviews/': // creative-reviews
      GET_MAIN_QUERY = gql`query GET_SITEMAP_AND_MENU_AND_CREATIVE_REVIEWS
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
        ${__GraphQL_Queries.queries.creativeReviews}
      }`;
      break;
    default:
      GET_MAIN_QUERY = gql`query GET_CLIENTS_CONTENT 
      {
        ${__GraphQL_Queries.queries.pages}
        ${__GraphQL_Queries.queries.menuItems}
      }`;
      // add creative review inner and project inner template
  }
}





const  App = () => {
  
  // show footer a liitle bit late for LCP reasons
  useEffect(() => {
      setTimeout(function(){
        if (document.getElementById('footer'))  document.getElementById('footer').classList.remove('hidden');
    },800);
  });

  const { data, loading, error } = useQuery(GET_MAIN_QUERY);

  if (loading) { console.log('loading'); return }
  if (error) { console.log('error'); return }
  if (!data) { console.log('!data'); return }

 
  console.log(data);
  // const menuNodes = data.menu.menuItems.nodes;
  const siteNodes = data.pages.nodes;
  const menuNodes = data.menuItems.nodes;
  const currentPage = data.page;

  // console.log(menuNodes);

  // console.log(siteNodes);


  return (
    <HelmetProvider>
          <Helmet>
              <title>VALUECOM | React</title>
          </Helmet>
          <BrowserRouter>
              <_Header menuNodes={menuNodes} />
              {
                (process.env.NODE_ENV == 'development') 
                ?
                <Tool_EditPage />
                :
                <></>
              }
                <Routes >
                  <Route element={<_AnimationLayout />}  >
                  {/* <Route> */}
                    <Route exact path="/" element={<Page_Home /> } />
                      {siteNodes.map((siteNode, index) => {
                          if (siteNode.slug!='homepage'){
                              let PageComponent = PageComponentsMap_slug_component[siteNode.slug];
                              // console.log(PageComponent==undefined);
                              // console.log(PageComponent);
                              // 404 - slug 404 is reserved from wordpress but that is not a problem
                              if (siteNode.slug=='404-2') { // all pages that have no wrong slug go to 404-2 page template
                                  return (
                                    <Route key={index} path="*" element={<Page_TemplateSimple nodeData={siteNode} />}   />
                                  );
                              }else if (siteNode.parent!=null && siteNode.parent.node.slug == 'creative-reviews') {// all pages that have creative-reviews as parent are creative-review html newsletters 
                                  return (
                                    <Route key={index} path={siteNode.uri} element={<Page_TemplateCreativeReview nodeData={siteNode} />}   />
                                  );
                              }else if (siteNode.parent!=null && siteNode.parent.node.slug == 'we-deliver') {// all pages that have work as parent are projects 
                                  return (
                                    <Route key={index} path={siteNode.uri} element={<Page_TemplatePoject nodeData={siteNode} />}   />
                                  );
                              }else if (PageComponent!=undefined) {// all pages that have custom template are mapped 
                                  return (
                                    <Route key={index} path={siteNode.uri} element={<PageComponent nodeData={siteNode} />}   />
                                  );
                              } else { // all pages that dont have custom template are not mapped mapped
                                  return (
                                    <Route key={index} path={siteNode.uri} element={<Page_TemplateSimple nodeData={siteNode} />}   />
                                  );
                              }
                          }
                      })}
                  </Route>
                </Routes>
              <_Footer />
          </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;