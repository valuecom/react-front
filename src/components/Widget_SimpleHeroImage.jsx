const Widget_SimpleHeroImage = (props) => {
    const imgUrl = props.sourceUrl;
    return (  
        <section>
            <div className="container-xxl d-flex justify-content-center pb-5">
                <img src={imgUrl} width="1296" height="384" />
            </div>
        </section>
    );
}

export default Widget_SimpleHeroImage;