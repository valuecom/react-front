import React  from "react";
import { useLazyQuery, gql } from "@apollo/client";
 
 
const GET_POST_ID = gql`
    query getpostid ( $puri: ID! ) {
        page(id: $puri, idType: URI ) {
            id
            databaseId
            slug
            uri
        }
    }
`;

const Tool_EditPage = () => {

    const [getPostId] = useLazyQuery(GET_POST_ID);

    const redirect_to_wordpress = async () => {
        let page_uri = window.location.href.replace('http://localhost:3000','');
        if (page_uri=='/') page_uri = '/homepage';
        // console.log(page_uri);
        const response = await getPostId({ variables: { puri: page_uri }});
   
        // console.log(response);
        const page_id_for_url = response.data.page.databaseId;
        // console.log(page_id_for_url);
  
 
        const target_url = 'https://newsite2023.valuecom.gr/backend/wp-admin/post.php?post=' + page_id_for_url + '&action=edit';
        window.open(target_url);
    };

    return(
        <button className="edit-page" onClick={redirect_to_wordpress} >Edit Page</button>
    );

}


export default Tool_EditPage;