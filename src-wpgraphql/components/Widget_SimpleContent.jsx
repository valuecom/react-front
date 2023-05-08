const Widget_SimpleContent = (props) => (  
    <section>
        <div className="container-xxl pb-5 px-5">
            <div className="px-md-5 mx-lg-5" dangerouslySetInnerHTML = {{ __html: props.contentHTML }} ></div>
        </div>
    </section>
);

export default Widget_SimpleContent;