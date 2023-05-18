const homePage_SLUG = "homepage";
const weAreTrusted_SLUG = "we-are-trusted";
const weDeliver_SLUG = "we-deliver";
const theTeam_SLUG = "the-team";
const creativeReview_SLUG = "creative-reviews";

const __GraphQL_Queries = {
    queries : {
        // get menu items
        menuItems: `menuItems(where: {location: PRIMARY})  
            {
                nodes {
                      id
                      uri
                      label
                }
            }`,
        pages: `pages(first: 10000) 
            {
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
                          mediaDetails {
                            sizes {
                              file
                              fileSize
                              height
                              mimeType
                              name
                              sourceUrl
                              width
                            }
                          }
                      }
                  }
                  parent {
                    node {
                      databaseId
                      slug
                    }
                  }
                }
            }`,
        homePage:`homePage: page( id: "${homePage_SLUG}", idType: URI ) 
            {
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
            }`,
            weAreTrusted:`weAreTrusted:page( id: "${weAreTrusted_SLUG}", idType: URI ) 
            {
                id
                title
                content
                weAreTrustedExtras{
                    images
                }
                featuredImage {
                    node {
                        id
                        sourceUrl
                        mediaDetails {
                          sizes {
                            file
                            fileSize
                            height
                            mimeType
                            name
                            sourceUrl
                            width
                          }
                        }
                    }
                }
            }`,
            weDeliver:`weDeliver:page( id: "${weDeliver_SLUG}", idType: URI ) 
            {
                id
                title
                content
                children(first: 100) {
                    edges {
                        node {
                            ...on Page {
                                title
                                uri
                                featuredImage {
                                    node {
                                        id
                                        sourceUrl
                                    }
                                }
                                projectsExtras {
                                    client
                                    ourServices
                                    project
                                }
                            }
                        }
                    }
                }
            }`,
            theTeam:`theTeam:page( id: "${theTeam_SLUG}", idType: URI ) {
              id
              title
              content
              featuredImage {
                node {
                  id
                  sourceUrl
                }
              }
              weHaveFacesExtras {
                tile1 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile2 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile3 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile4 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile5 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile6 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile7 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile8 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
                tile9 {
                  fieldGroupName
                  subTitle
                  text
                  title
                  thumb {
                    sourceUrl
                  }
                }
              }
            }`,
            creativeReviews:`creativeReviews:page( id: "${creativeReview_SLUG}", idType: URI ) 
            {
              id
              title
              content
              children(first: 100) {
                  edges {
                      node {
                          ...on Page {
                              title
                              uri
                              featuredImage {
                                  node {
                                      id
                                      sourceUrl
                                  }
                              }
                          }
                      }
                  }
              }
          }`,
    }
};
export default __GraphQL_Queries;