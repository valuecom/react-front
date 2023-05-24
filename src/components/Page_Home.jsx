import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import __GraphQL_Queries from "./__GraphQL_Queries";

// import {
//     Widget_HomeSliderBootstrap
// } from "./";

import { useQuery, gql } from "@apollo/client";


const Widget_HomeSliderBootstrap = lazy( () => import("./Widget_HomeSliderBootstrap") );

const Page_Home = () => {

    const HOMEPAGE_CONTENT = gql`query HOMEPAGE_CONTENT
    {
      ${__GraphQL_Queries.queries.homePage}
    }`;

    const { data, loading, error } = useQuery(HOMEPAGE_CONTENT);

    // console.log(data);

    if (loading) { console.log('loading From Page_Home'); return }
    if (error) { console.log('error From Page_Home'); return }
    if (!data) { console.log('!data From Page_Home'); return }

    const nodeMoreData = data.homePage;
    const home_gallery_html = nodeMoreData.content;

    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(home_gallery_html, "text/html");
    const imgs = parsedDocument.getElementsByTagName("img");
    // const img_arr = {};
    // const src_set = [];
    // for (const [key, value] of Object.entries(imgs)) {
    //     // img_arr[key] = value.src.replace('-1024x373', '');
    //     img_arr[key] = value;
    //     // src_set[key].srcset = value.srcset;
    // }

    const homepageExtrasArray = nodeMoreData.homepageExtras;
    // console.log(img_arr);


    const img_arr_inner = [];
    var n = 0;
    for (const [key, value] of Object.entries(homepageExtrasArray)) {
        if (key!='__typename'){
            var _targetUrl = value.targetUrl==null?'':value.targetUrl.replace(/<\/?[^>]+(>|$)/g, '').replace("\n","");
            img_arr_inner[n++] = { img_src: value.sourceUrl, title: value.title, _targetUrl: _targetUrl, altText: value.altText, width: value.mediaDetails.width, height: value.mediaDetails.height };
        }
    }

//  console.log(img_arr_inner);

    return (
        <main className="page">
            <Suspense fallback={<span style={{fontSize:'12px'}}>Loading...</span>} >
                <Widget_HomeSliderBootstrap images = {imgs} />
            </Suspense>
            <section className="py-3">
                <div className="container-xxl">
                    <div className="row px-sm-5 px-md-0">
                        {[6,3,3].map( (value, index) => {
                            // console.log('tolis')
                            // console.log(img_arr_inner[index]._targetUrl)
                            return (
                                <div key={"img__"+index} className={"col-md-" + value}>
                                    <figure className="figure mx-sm-5 px-sm-5 mx-md-0 px-md-0">
                                        <Link to={img_arr_inner[index]._targetUrl} >
                                            <div className="figure-img-wrap">
                                                <img src={img_arr_inner[index].img_src} width={img_arr_inner[index].width} height={img_arr_inner[index].height} className="figure-img img-fluid" alt={img_arr_inner[index].altText} loading="lazy" />
                                            </div>
                                            <figcaption className="figure-caption fw-medium fs-5">{img_arr_inner[index].title}</figcaption>
                                        </Link>
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-3">
                <div className="container-xxl">
                    <div className="row px-sm-5 px-md-0">
                        {[3,3,6].map( (value, index) => {
                            // console.log('tolis')
                            index = index+3;
                            return (
                                <div key={"img__"+index} className={"col-md-" + value }>
                                    <figure className="figure mx-sm-5 px-sm-5 mx-md-0 px-md-0">
                                        <Link to={img_arr_inner[index]._targetUrl} >
                                            <div className="figure-img-wrap">
                                                <img src={img_arr_inner[index].img_src} width={img_arr_inner[index].width} height={img_arr_inner[index].height}  className="figure-img img-fluid" alt={img_arr_inner[index].altText} loading="lazy" />
                                            </div>
                                            <figcaption className="figure-caption fw-medium fs-5">{img_arr_inner[index].title}</figcaption>
                                        </Link>
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-3 mb-5">
                <div className="container-xxl">
                    <div className="row px-sm-5 px-md-0">
                        {[6,3,3].map( (value, index) => {
                            // console.log('tolis')
                            index = index + 6;
                            return (
                                <div key={"img__"+index} className={"col-md-" + value }>
                                    <figure className="figure mx-sm-5 px-sm-5 mx-md-0 px-md-0">
                                        <Link to={img_arr_inner[index]._targetUrl} >
                                            <div className="figure-img-wrap">
                                                <img src={img_arr_inner[index].img_src}  width={img_arr_inner[index].width} height={img_arr_inner[index].height}  className="figure-img img-fluid" loading="lazy" alt="..." />
                                            </div>
                                            <figcaption className="figure-caption fw-medium fs-5">{img_arr_inner[index].title}</figcaption>
                                        </Link>
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page_Home;
