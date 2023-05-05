import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery, gql } from "@apollo/client";
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


// const GET_MENU_BY_NAME_QUERY = gql`
//  {
//     menu(id: "Primary Menu", idType: NAME) {
//       count
//       id
//       name
//       slug
//       menuItems {
//         nodes {
//           connectedObject {
//             __typename ... on Page {
//               title
//               databaseId
//             } 
//           }
//           id
//           uri
//           description
//           label
//         }
//       }
//     }
//   }
// `;

const GET_SITEMAP = gql`
{
  pages(first: 10000) {
    nodes {
      id
      databaseId
      title
      slug
      uri
      status
      parent {
        node {
          id
          databaseId
          slug
        }
      }
    }
  }
}
`;

const  App = () => {

  useEffect(() => {
      setTimeout(function(){
        if (document.getElementById('footer'))  document.getElementById('footer').classList.remove('hidden');
    },2000);
  });
  const { data, loading, error } = useQuery(GET_SITEMAP);

  if (loading) { console.log('loading'); return }
  if (error) { console.log('error'); return }
  if (!data) { console.log('!data'); return }

  // console.log(data);
  // console.log('1');
  // const menuNodes = data.menu.menuItems.nodes;
  const siteNodes = data.pages.nodes;
  // console.log(siteNodes);

  const PageComponentsMap_slug_component = {
    'we-are-trusted': Page_WeAreTrusted, 
    'we-deliver': Page_WeDeliver, 
    'the-team': Page_TheTeam,
    'contact': Page_Contact,
    'creative-reviews': Page_CreativeReviews

    // all other slugs go to - >Page_TemplateSimple see below in routing
  }

  return (
    <HelmetProvider>
          <Helmet>
              <title>VALUECOM | React</title>
          </Helmet>
          <BrowserRouter>
              <_Header />
                <Tool_EditPage />
                <Routes >
                  <Route element={<_AnimationLayout />}>
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