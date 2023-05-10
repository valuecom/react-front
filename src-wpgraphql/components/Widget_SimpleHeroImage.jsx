import React from "react";
 

const Widget_SimpleHeroImage = (props) => {
    const imgUrl = props.sourceUrl;
    return (  
        <section>
            <div className="container-xxl d-flex justify-content-center pb-5">
                <img src={imgUrl} />
            </div>
        </section>
    );
}

export default Widget_SimpleHeroImage;