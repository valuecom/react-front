import React from "react";
import { Link } from "react-router-dom";
 

import {
    Widget_HomeSlider
} from "./";

import { useQuery, gql } from "@apollo/client";

const Page_Home = () => {

    const homepage_databaseId = 7;
    // console.log(nodeData);
    const HOMEPAGE_CONTENT = gql`query HOMEPAGE_CONTENT {
        page( id: ${homepage_databaseId}, idType: DATABASE_ID ) {
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

    const { data, loading, error } = useQuery(HOMEPAGE_CONTENT);

    console.log(data);

    if (loading) { console.log('loading From Page_Home'); return }
    if (error) { console.log('error From Page_Home'); return }
    if (!data) { console.log('!data From Page_Home'); return }

    const nodeMoreData = data.page;
    const home_gallery_html = nodeMoreData.content;



    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(home_gallery_html, "text/html");
    const imgs = parsedDocument.getElementsByTagName("img");
    const img_arr = [];
    for (const [key, value] of Object.entries(imgs)) {
        img_arr[key] = value.src.replace('-1024x373', '');
    }

    const homepageExtrasArray = nodeMoreData.homepageExtras;
    // console.log(homepageExtrasArray);


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
            <Widget_HomeSlider images = {img_arr} />
            <section className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        {[6,3,3].map( (value, index) => {
                            // console.log('tolis')
                            // console.log(img_arr_inner[index]._targetUrl)
                            return (
                                <div key={"img__"+index} className={"col-sm-" + value }>
                                    <figure className="figure">
                                        <Link to={img_arr_inner[index]._targetUrl} >
                                            <div className="figure-img-wrap">
                                                <img src={img_arr_inner[index].img_src} width={img_arr_inner[index].width} height={img_arr_inner[index].height} className="figure-img img-fluid" loading="lazy" alt={img_arr_inner[index].altText} />
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
                    <div className="row">
                        {[3,3,6].map( (value, index) => {
                            // console.log('tolis')
                            index = index+3;
                            return (
                                <div key={"img__"+index} className={"col-sm-" + value }>
                                    <figure className="figure">
                                        <Link to={img_arr_inner[index]._targetUrl} >
                                            <div className="figure-img-wrap">
                                                <img src={img_arr_inner[index].img_src} width={img_arr_inner[index].width} height={img_arr_inner[index].height}  className="figure-img img-fluid" loading="lazy" alt="..." />
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
                    <div className="row">
                        {[6,3,3].map( (value, index) => {
                            // console.log('tolis')
                            index = index + 6;
                            return (
                                <div key={"img__"+index} className={"col-sm-" + value }>
                                    <figure className="figure">
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
