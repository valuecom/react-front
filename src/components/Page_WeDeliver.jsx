import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import __GraphQL_Queries from "./__GraphQL_Queries";
import { useQuery, gql } from "@apollo/client";
import preloadImage from "./__Utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Page_WeDeliver = (props) => {

    // const nodeData = props.nodeData;
    const preloadingArray = props.preloadingProjectsArray;

    useEffect(() => {
        document.body.classList.add('we-deliver')
        return () => {
          document.body.classList.remove('we-deliver')
        }
    }, [])

    const refBox = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            for (let i=0;i<document.getElementsByClassName('figure').length;i++){
                let d = 0.2*(i%2);
                gsap.from(".box-"+i, {  
                    scrollTrigger: {
                        trigger: ".box-"+i
                    },
                    delay: d,
                    transform: "translateY(100px)",
                    opacity:0,
                    duration:0.8
                });
            }

            // gsap.to(".box-4", {  scale:3 });
        }, refBox);
        return () => ctx.revert();
    });


    // console.log("preloadingArray", preloadingArray);

    const GET_CONTENT_WE_DELIVER = gql`query GET_CONTENT_WE_DELIVER
    {
      ${__GraphQL_Queries.queries.weDeliver}
    }`;

    const { data, loading, error } = useQuery(GET_CONTENT_WE_DELIVER);

    if (loading) { console.log('loading From Page_WeDeliver'); return }
    if (error) { console.log('error From Page_WeDeliver'); return }
    if (!data) { console.log('!data From Page_WeDeliver'); return }

    const nodeMoreData = data.weDeliver;

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
        <div ref={refBox}>
            <section className="page-title-section">
                <div className="container-xxl">
                    <div className="page-title-wrap my-5 px-5">
                        <h1 className="page-title fs-1 fw-normal text-center text-lg-start">{nodeMoreData.title}</h1>
                        <p className="mt-5 text-center text-lg-start">{content_text[0]!=null?content_text[0].innerText:''}</p>
                    </div>
                </div>
            </section>
            <section className="py-3">
                <div className="container-xxl">
                    {childPageArray.map((childPage, index) => {
                        return (
                            <div className="row" key={index}  >
                                <div className="col-md-6">
                                    <figure className={"box-" + index*2 +" figure mb-5"}>
                                        <Link to={childPage[0].uri} onMouseEnter={ () => preloadImage(preloadingArray[childPage[0].uri]) } >
                                            <div className="figure-img-wrap">
                                                <img src={childPage[0].featuredImage.node.sourceUrl} className="figure-img img-fluid" alt="..." width="636" height="417" />
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
                                            <figure className={"box-" + (index*2+1) +" figure mb-5"}>
                                                <Link to={childPage[1].uri} onMouseEnter={ () => preloadImage(preloadingArray[childPage[1].uri]) }  >
                                                    <div className="figure-img-wrap">
                                                        <img src={childPage[1].featuredImage.node.sourceUrl} className="figure-img img-fluid" alt="..."  width="636" height="417" />
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
        </div>
    )
}
 
export default Page_WeDeliver;