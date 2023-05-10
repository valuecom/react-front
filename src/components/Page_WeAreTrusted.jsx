 import { useQuery, gql } from "@apollo/client";
 
import Widget_SimpleTitle from "./Widget_SimpleTitle";
import Widget_SimpleHeroImage from "./Widget_SimpleHeroImage";
import Widget_SimpleContent from "./Widget_SimpleContent";

const Page_WeAreTrusted = (props) => {

    const nodeData = props.nodeData;
    // console.log(nodeData);
    const GET_CLIENTS_CONTENT = gql`query GET_CLIENTS_CONTENT{
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
    // const text = nodeMoreData.content.replace(/<\/?[^>]+(>|$)/g, '');

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
            <Widget_SimpleTitle widgetTitle={nodeData.title} />
            <Widget_SimpleHeroImage sourceUrl={nodeMoreData.featuredImage.node.sourceUrl} />
            <Widget_SimpleContent contentHTML={nodeMoreData.content} />
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