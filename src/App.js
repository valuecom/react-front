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
  Page_WeTeam,
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

  // const PageComponents = {
  //   'Page_WeAreTrusted': Page_WeAreTrusted, 
  //   'Page_WeDeliver': Page_WeDeliver, 
  //   'Page_WeTeam': Page_WeTeam, 
  //   'Page_WeBelieve': Page_WeBelieve, 
  //   'Page_TemplateSimple': Page_TemplateSimple, 
  //   'Page_TheTeam': Page_TheTeam, 
  //   'Page_Contact': Page_Contact
  // }

  const PageComponentsMap_slug_component = {
    'we-are-trusted': Page_WeAreTrusted, 
    'we-deliver': Page_WeDeliver, 
    // 'we-team': Page_WeTeam, 
    'the-team': Page_TheTeam,
    'contact': Page_Contact,

    'we-team': Page_TemplateSimple,
    'we-believe': Page_TemplateSimple,
    'we-do-fs-marketing': Page_TemplateSimple,
    'study-and-research': Page_TemplateSimple,
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
                    {/* {menuNodes.map((menuNode, index) => {
                        let PageComponent = PageComponents[menuNode.description];
                        return (
                          <Route key={index} path={menuNode.uri} element={<PageComponent nodeData={menuNode.connectedObject} />}   />
                        );
                    })} */}

                      {siteNodes.map((siteNode, index) => {
                        if (siteNode.slug!='homepage'){
                            let PageComponent = PageComponentsMap_slug_component[siteNode.slug];
                            // console.log(PageComponent);
                            // console.log(siteNode.uri);
                            // console.log(siteNode.databaseId);
                            return (
                              <Route key={index} path={siteNode.uri} element={<PageComponent nodeData={siteNode} />}   />
                            );
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