import React, { useEffect, useLayoutEffect }  from "react";

import { logginF } from './__Utils';
import { Helmet } from "react-helmet-async";
import { useQuery, gql } from "@apollo/client";

const Page_TemplateCreativeReview = (props) => {
    const nodeData = props.nodeData;

    
    useEffect(() => {
        document.body.classList.add('creative-review');
        return () => {
          document.body.classList.remove('creative-review');
        }
    }, [])

    useLayoutEffect(() => {
        document.getElementById('footer').classList.remove('hidden');
        return () => { 
            document.getElementById('footer').classList.add('hidden');
        }
    });

    const GET_CONTENT_CREATIVE_REVIEW = gql`query GET_CONTENT_CREATIVE_REVIEW {
        page( id: ${nodeData.databaseId}, idType: DATABASE_ID ) {
            id
            title
            content
            creativeReviewTemplateExtras {
                frameHeight
                frameUrl
            }
        }
    }`;

    const { data, loading, error } = useQuery(GET_CONTENT_CREATIVE_REVIEW);

    if (loading) { logginF('loading From Page_CreativeReviews'); return }
    if (error) { logginF('error From Page_CreativeReviews'); return }
    if (!data) { logginF('error From Page_CreativeReviews'); return }

    const nodeMoreData = data.page;

    // console.log(nodeMoreData);

    return ( 
        <>
            <Helmet>
                <title>{nodeMoreData.title} | VALUECOM</title>
                <meta
                    name="description"
                    content="FullStack Marketing."
                />
                <meta property="og:title" content={nodeMoreData.title + " | VALUECOM"} />
            </Helmet>
            <iframe className="iframe-creative-review" src={nodeMoreData.creativeReviewTemplateExtras.frameUrl} height={nodeMoreData.creativeReviewTemplateExtras.frameHeight} ></iframe>
        </>
     );
}
 
export default Page_TemplateCreativeReview;