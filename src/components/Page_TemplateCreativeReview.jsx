import React from "react";

import { useQuery, gql } from "@apollo/client";

const Page_TemplateCreativeReview = (props) => {
    const nodeData = props.nodeData;

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

    if (loading) { console.log('loading From Page_CreativeReviews'); return }
    if (error) { console.log('error From Page_CreativeReviews'); return }
    if (!data) { console.log('!data From Page_CreativeReviews'); return }

    const nodeMoreData = data.page;

    console.log(nodeMoreData);

    return ( 
        <>
            <iframe className="iframe-creative-review" src={nodeMoreData.creativeReviewTemplateExtras.frameUrl} height={nodeMoreData.creativeReviewTemplateExtras.frameHeight} ></iframe>
        </>
     );
}
 
export default Page_TemplateCreativeReview;