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


import 'bootstrap/dist/css/bootstrap.css';


let GET_SITEMAP_AND_MENU = null;
 
if(window.location.href!='http://localhost:3000/' && window.location.href!='https://newsite2023.valuecom.gr/'){
GET_SITEMAP_AND_MENU = gql`query GET_SITEMAP_AND_MENU 
{
  pages(first: 10000) {
    nodes {
      databaseId
      title
      content
      slug
      uri
      featuredImage {
              node {
                  id
                  sourceUrl
              }
      }
      parent {
        node {
          databaseId
          slug
        }
      }
    }
  }
  menuItems(where: {location: PRIMARY})  {
    nodes {
      id
      uri
      label
    }
  }
}
`;
}else{
GET_SITEMAP_AND_MENU = gql`query GET_SITEMAP_AND_MENU_AND_HOME
{
  pages(first: 10000) {
    nodes {
      databaseId
      title
      content
      slug
      uri
      featuredImage {
              node {
                  id
                  sourceUrl
              }
      }
      parent {
        node {
          databaseId
          slug
        }
      }
    }
  }
  menuItems(where: {location: PRIMARY})  {
    nodes {
      id
      uri
      label
    }
  }
  
  page( id: 7, idType: DATABASE_ID ) {
    id
    title
    content
    homepageExtras {
        image1 {
          sourceUrl
          title
          altText
          targetUrl: description
          mediaDetails {
            height
            width
          }
        }
        image2 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image3 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image4 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image5 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image6 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image7 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image8 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
        image9 {
            sourceUrl
            title
            altText
            targetUrl: description
            mediaDetails {
                height
                width
            }
        }
    }
  }
}
`;
}

const  App = () => {

  useEffect(() => {
      setTimeout(function(){
        if (document.getElementById('footer'))  document.getElementById('footer').classList.remove('hidden');
    },800);
  });

  const { data, loading, error } = useQuery(GET_SITEMAP_AND_MENU);

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
              <_Header menuNodes={menuNodes} />
              {
                (process.env.NODE_ENV == 'development') 
                ?
                <Tool_EditPage />
                :
                <></>
              }
                <Routes >
                  {/* <Route element={<_AnimationLayout />}  > */}
                  <Route>
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