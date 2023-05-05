import React from "react";
import { Link } from "react-router-dom";
import{
    Janssen_Tile_2,
    Finish_Tile,
    ezgif_com_gif_make,
    Ciroc_Tile,
    Don_Julio_Tile,
    Header_Banner_tile_emvolio,
    Header_Banner_tile_alpro,
    Header_Banner_tile_Jhonnie_Walker,
    JW_Header_Banner_Tile,
    Delta_Moms_tile,
    Oreo_Tile,
    FD_Tile_640x420_1,
    BD_NIKE_SEPOLIA_Tile_640x420_1,
    Allazoume_Sinitheies_Tile,
    Giannis_AllStar_Tile_640x420_1,
    EU_Memes_Tile_640x420_1,
    VF_Breaking_The_Glass_Tile_640x420_1
}  from "../assets";

import { useQuery, gql } from "@apollo/client";



const Page_WeDeliver = (props) => {
    const nodeData = props.nodeData;

    const GET_CONTENT_WE_DELIVER = gql`{
        page( id: ${nodeData.databaseId}, idType: DATABASE_ID ) {
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
        }
}`;

    const { data, loading, error } = useQuery(GET_CONTENT_WE_DELIVER);

    if (loading) { console.log('loading From Page_WeDeliver'); return }
    if (error) { console.log('error From Page_WeDeliver'); return }
    if (!data) { console.log('!data From Page_WeDeliver'); return }

    const nodeMoreData = data.page;

    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(nodeMoreData.content, "text/html");
    const content_text = parsedDocument.getElementsByTagName("p");
 
    let childPages = nodeMoreData.children.edges;

    // const childPagesresult = Object.keys(childPages).map((key) => [key, childPages[key]]);
    // console.log(childPagesresult);
    let ncount = -1;
    let childPageArray = [];
    childPages.forEach((element, ind) => {
        if (ind%2 == 0) ncount++;  
        if (!childPageArray[ncount]) childPageArray[ncount] = [];
        childPageArray[ncount].push(element.node);
    });
    //  console.log(childPageArray);

    return(
        <>
            <section className="page-title-section">
                <div className="container-xxl">
                    <div className="page-title-wrap my-5 px-5">
                        <h1 className="page-title fs-1 fw-normal text-center text-lg-start">{nodeMoreData.title}</h1>
                        <p className="mt-5 text-center text-lg-start">{content_text[0].innerText}</p>
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
                                                <img src={childPage[0].featuredImage.node.sourceUrl} className="figure-img img-fluid" alt="..." />
                                            </div>
                                            <figcaption className="figure-caption fw-medium">{childPage[0].projectsExtras.client}</figcaption>
                                            <figcaption className="figure-caption fw-bold p-0">{childPage[0].title}</figcaption>
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
                                                    <figcaption className="figure-caption fw-medium">{childPage[1].projectsExtras.client}</figcaption>
                                                    <figcaption className="figure-caption fw-bold p-0">{childPage[1].title}</figcaption>
                                                </Link>
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
    )
}
 
export default Page_WeDeliver;