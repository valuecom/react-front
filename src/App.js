import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery, gql } from "@apollo/client";
import {
  _Header,
  _Footer,
  Page_Home,
  Page_WeAreTrusted,
  Page_WeDeliver,
  Page_WeTeam,
  Page_WeBelieve,
  Page_TheTeam,
  Page_Contact,

  AnimationLayout
  
} from "./components";
// import { AnimatePresence, motion } from "framer-motion";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { CSSTransition, SwitchTransition } from 'react-transition-group'

  


const GET_MENU_BY_NAME_QUERY = gql`
 {
    menu(id: "Primary Menu", idType: NAME) {
      count
      id
      name
      slug
      menuItems {
        nodes {
          connectedObject {
            __typename ... on Page {
              title
              databaseId
            } 
          }
          id
          uri
          description
          label
        }
      }
    }
  }
`;

const  App = () => {

  const { data, loading, error } = useQuery(GET_MENU_BY_NAME_QUERY);

  if (loading) { console.log('loading'); return }
  if (error) { console.log('error'); return }
  if (!data) { console.log('!data'); return }

  // console.log(data);
  // console.log('1');
  const menuNodes = data.menu.menuItems.nodes;
  // console.log(menuNodes);

  const PageComponents = {
    'Page_WeAreTrusted': Page_WeAreTrusted, 
    'Page_WeDeliver': Page_WeDeliver, 
    'Page_WeTeam': Page_WeTeam, 
    'Page_WeBelieve': Page_WeBelieve, 
    'Page_TheTeam': Page_TheTeam, 
    'Page_Contact': Page_Contact
  }
  


  const PageComponent = PageComponents['Page_WeAreTrusted'];
  // console.log(PageComponent);
   

 
  return (
    <HelmetProvider>
          <Helmet>
              <title>VALUECOM | React</title>
          </Helmet>
          <BrowserRouter>
              <_Header menuLinks={ menuNodes } />
                <Routes >
                  <Route element={<AnimationLayout />}>
                    <Route exact path="/" element={<Page_Home /> } />
                    {menuNodes.map((menuNode, index) => {
                        let PageComponent = PageComponents[menuNode.description];
                        return (
                          <Route key={index} path={menuNode.uri} element={<PageComponent nodeData={menuNode.connectedObject} />}   />
                        );
                    })}
                  </Route>
                </Routes>
              <_Footer />
          </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;