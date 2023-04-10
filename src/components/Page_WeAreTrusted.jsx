import React from "react";
// import parse from 'html-react-parser';
import { useQuery, gql } from "@apollo/client";
// import{
//     // We_are_trusted_Art,
//     kyvernisi_logo,
//     aade_logo,
//     Fraport_logo,
//     EU,
//     Janssen_1,
//     Alpha_Bank_1,
//     Diageo,
//     Beiersdorf,
//     Microsoft,
//     Peiraios,
//     LAFARGE,
//     Cosmote,
//     JandJ_logo,
//     Nike,
//     Nestle,
//     Reckitt,
//     AB,
//     VF,
//     Modelez,
//     Philips,
//     NIVEA,
//     DELTA,
//     PEPSICO,
//     DANONE,
//     Public_1,
//     JW,
//     Cardhu,
//     Don_Julio,
//     Ciroc,
//     Kaizen_1,
//     fenix,
//     HALLS,
//     OREO,
//     Caudalie,
//     Vivartia,
//     Tetrapak,
//     BIC,
//     PIAGGIO,
//     Teva_logo,
//     ucb_logo,
//     ASHOKA,
//     RELOAD,
//     Mazi_Gia_To_Paidi,
//     Anasa_1,
//     athinaiki_logo,
//     Amstel_logo,
//     Heineken_logo,
//     Alfa_logo,
//     Fischer_logo,
//     Mamos_logo,
//     Ioli_logo,
//     Lagunitas_logo,
//     Milokleftis_logo,
//     Nimfi_logo,
// }  from "../assets";

import { AnimatePresence, motion } from "framer-motion";

const Page_WeAreTrusted = (props) => {

    const nodeData = props.nodeData;
    // console.log(nodeData);
    const GET_CLIENTS_CONTENT = gql`{
        page( id: ${nodeData.databaseId}, idType: DATABASE_ID ) {
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
                    }
                }
            }
        }
    `;

    const { data, loading, error } = useQuery(GET_CLIENTS_CONTENT);

    if (loading) { console.log('loading From Page_WeAreTrusted'); return }
    if (error) { console.log('error From Page_WeAreTrusted'); return }
    if (!data) { console.log('!data From Page_WeAreTrusted'); return }
  
    const nodeMoreData = data.page;
    // const content = parse(nodeMoreData.content);
    // console.log(content);

    // strip tags from html in text
    const text = nodeMoreData.content.replace(/<\/?[^>]+(>|$)/g, '');

    const wysiwyg_html = nodeMoreData.weAreTrustedExtras.images;

    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(wysiwyg_html, "text/html");
    const imgs = parsedDocument.getElementsByTagName("img");
    const img_arr = [];
    for (const [key, value] of Object.entries(imgs)) {
        img_arr[key] = value.src;
    }

    return (
        <>
            <section className="page-title-section">
                <div className="container-xxl">
                    <div className="page-title-wrap my-5 px-5">
                        <h1 className="page-title fs-1 fw-normal text-center text-lg-start">{nodeMoreData.title}</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-xxl d-flex justify-content-center pb-5">
                    <img src={nodeMoreData.featuredImage.node.sourceUrl} />
                </div>
            </section>
            <section>
                <div className="container-xxl pb-5 px-5">
                    <div className="px-md-5 mx-lg-5">
                        <p>{text}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 logos-gallery d-grid px-md-5 px-xxl-0 py-5">
                            {img_arr.map( (_src, index) => {
                                return (
                                    <img key={index} src={_src} className="w-100" />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
 
export default Page_WeAreTrusted;