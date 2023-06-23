import React, { useEffect, useLayoutEffect }  from "react";
import Widget_SimpleTitle  from "./Widget_SimpleTitle";
import Widget_SimpleHeroImage  from "./Widget_SimpleHeroImage";
import Widget_SimpleContent  from "./Widget_SimpleContent";

const Page_WeBelieve = (props) => {
    const nodeData = props.nodeData;
 

    useEffect(() => {
        document.body.classList.add('simple');
        return () => {
          document.body.classList.remove('simple');
        }
    }, [])

    useLayoutEffect(() => {
        document.getElementById('footer').classList.remove('hidden');
        return () => { 
            document.getElementById('footer').classList.add('hidden');
        }
    });
    
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
                    <Widget_SimpleHeroImage imgObj={nodeData.featuredImage.node} /> 
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