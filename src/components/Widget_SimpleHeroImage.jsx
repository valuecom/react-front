const Widget_SimpleHeroImage = (props) => {
    const imgObj = props.imgObj;
    console.log(imgObj.mediaDetails.sizes);
    return (  
        <section>
            <div className="container-xxl d-flex justify-content-center pb-5">
                <img 
                    src={imgObj.sourceUrl} 
                    srcSet={imgObj.mediaDetails.sizes[2].sourceUrl + ' 600w, ' +imgObj.sourceUrl + ' 1280w' } 
                    style={{objectFit:'cover'}}
                    width="1296" 
                    height="384" 
                    alt="..."/>
            </div>
        </section>
    );
}

export default Widget_SimpleHeroImage;