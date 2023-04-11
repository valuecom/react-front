import React from "react";
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

  Page_TemplateSimple,

  _AnimationLayout

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
  pages {
    nodes {
      id
      databaseId
      title
      slug
      uri
      status
    }
  }
}
`;

const  App = () => {

  const { data, loading, error } = useQuery(GET_SITEMAP);

  if (loading) { console.log('loading'); return }
  if (error) { console.log('error'); return }
  if (!data) { console.log('!data'); return }

  // console.log(data);
  // console.log('1');
  // const menuNodes = data.menu.menuItems.nodes;
  const siteNodes = data.pages.nodes;
  console.log(siteNodes);

  const PageComponentsMap_slug_component = {
    'we-are-trusted': Page_WeAreTrusted, 
    'we-deliver': Page_WeDeliver, 
    'the-team': Page_TheTeam,
    'contact': Page_Contact,

    'we-team': Page_TemplateSimple,
    'we-believe': Page_TemplateSimple,
    'we-do-fs-marketing': Page_TemplateSimple,
    'study-and-research': Page_TemplateSimple,
    'we-are-storytellers': Page_TemplateSimple,
    'we-dream': Page_TemplateSimple,
    '404-2' : Page_TemplateSimple,
  }

 
  return (
    <HelmetProvider>
          <Helmet>
              <title>VALUECOM | React</title>
          </Helmet>
          <BrowserRouter>
              <_Header />
                <Routes >
                  <Route element={<_AnimationLayout />}>
                    <Route exact path="/" element={<Page_Home /> } />
                      {siteNodes.map((siteNode, index) => {
                          if (siteNode.slug!='homepage'){
                              let PageComponent = PageComponentsMap_slug_component[siteNode.slug];
                              // 404 - slug 404 is reserved from wordpress but that is not a problem
                              if (siteNode.slug!='404-2') {
                                  return (
                                    <Route key={index} path={siteNode.uri} element={<PageComponent nodeData={siteNode} />}   />
                                  );
                              } else { 
                                  return (
                                    <Route key={index} path="*" element={<PageComponent nodeData={siteNode} />}   />
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