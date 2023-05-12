import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import{
    creativeReviewsFeaturedImage
}  from "../assets";


const Page_CreativeReviews = (props) => {
    const nodeData = props.nodeData;

    const GET_CONTENT_CREATIVE_REVIEWS = gql`query GET_CONTENT_CREATIVE_REVIEWS {
        page( id: "${nodeData.slug}", idType: URI ) {
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
        }
    }`;

    const { data, loading, error } = useQuery(GET_CONTENT_CREATIVE_REVIEWS);

    if (loading) { console.log('loading From Page_CreativeReviews'); return }
    if (error) { console.log('error From Page_CreativeReviews'); return }
    if (!data) { console.log('!data From Page_CreativeReviews'); return }

    const nodeMoreData = data.page;

    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(nodeMoreData.content, "text/html");
    const content_text = parsedDocument.getElementsByTagName("p");
    // console.log(content_text.length);
    let childPages = nodeMoreData.children.edges;

//     const childPagesresult = Object.keys(childPages).map((key) => [key, childPages[key]]);
//  console.log(childPagesresult);
    let ncount = -1;
    let childPageArray = [];
    childPages.forEach((element, ind) => {
        if (ind%2 == 0) ncount++;  
        if (!childPageArray[ncount]) childPageArray[ncount] = [];
        childPageArray[ncount].push(element.node);
    });

 console.log(childPageArray);

    return(
        <>
            <section className="page-title-section">
                <div className="container-xxl">
                    <div className="page-title-wrap my-5 px-5">
                        <h1 className="page-title fs-1 fw-normal text-center text-lg-start">{nodeMoreData.title}</h1>
                        {
                            content_text.length>0
                            ?
                            <p className="mt-5 text-center text-lg-start">{content_text[0].innerText}</p>
                            :
                            <></>
                        }
                    </div>
                </div>
            </section>
            <section className="py-3">
                <div className="container-xxl">
                    {childPageArray.map((childPage, index) => {
                        return (
                            <div className="row" key={index}  >
                                <div className="col-md-6">
                                    <figure className="figure mb-5">
                                        <Link to={childPage[0].uri}>
                                            <div className="figure-img-wrap">
                                                <img src={childPage[0].featuredImage.node.sourceUrl?childPage[0].featuredImage.node.sourceUrl:creativeReviewsFeaturedImage} className="figure-img img-fluid" alt="..." />
                                            </div>
                                            <figcaption className="figure-caption text-center mt-2 fw-bold p-0">{childPage[0].title}</figcaption>
                                        </Link>
                                    </figure>
                                </div>
                                { 
                                    childPage[1]
                                    ?
                                        <div className="col-md-6" >
                                            <figure className="figure mb-5">
                                                <Link to={childPage[1].uri}>
                                                    <div className="figure-img-wrap">
                                                        <img src={childPage[1].featuredImage.node.sourceUrl} className="figure-img img-fluid" alt="..." />
                                                    </div>
                                                </Link>
                                                <figcaption className="figure-caption text-center mt-2 fw-bold p-0">{childPage[1].title}</figcaption>
                                            </figure>
                                        </div>
                                    :
                                        <></>
                                }
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Page_CreativeReviews;