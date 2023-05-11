import { useQuery, gql } from "@apollo/client";

import Widget_SimpleTitle  from "./Widget_SimpleTitle";
import Widget_SimpleHeroImage  from "./Widget_SimpleHeroImage";
import Widget_SimpleContent  from "./Widget_SimpleContent";

const Page_WeBelieve = (props) => {
    const nodeData = props.nodeData;
    // console.log(nodeData);
    // const GET_SIMPLE_CONTENT = gql`query GET_SIMPLE_CONTENT{
    //     page( id: ${nodeData.databaseId}, idType: DATABASE_ID ) {
    //         id
    //         title
    //         content
    //         featuredImage {
    //                 node {
    //                     id
    //                     sourceUrl
    //                 }
    //             }
    //         }
    //     }
    // `;

    // const { data, loading, error } = useQuery(GET_SIMPLE_CONTENT);

    // if (loading) { console.log('loading From Page_WeAreTrusted'); return }
    // if (error) { console.log('error From Page_WeAreTrusted'); return }
    // if (!data) { console.log('!data From Page_WeAreTrusted'); return }

    // const nodeMoreData = data.page;

    return (
        <>
            {
                nodeData.title!==null ? 
                <Widget_SimpleTitle widgetTitle={nodeData.title} />
                    :
                    'no-title'
            }
            {
                nodeData.featuredImage!==null ? 
                    <Widget_SimpleHeroImage sourceUrl={nodeData.featuredImage.node.sourceUrl} /> 
                    :
                    ''
            }
            {
                nodeData.content!==null ? 
                    <Widget_SimpleContent contentHTML={nodeData.content} /> 
                    :
                    ''
            }
           
        </>
    )
}


export default Page_WeBelieve;