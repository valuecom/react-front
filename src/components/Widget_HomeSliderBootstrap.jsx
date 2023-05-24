
import Carousel from 'react-bootstrap/Carousel';
 
const Widget_HomeSliderBootstrap = (props) => {
 
    // console.log(props);
    const img_arr = [...props.images];

    return (
        <section className="slider-section mb-5">
            <div className="container-fluid px-0" >
                <div className="slider" >
                    <Carousel>
                            {img_arr.map( (_data, index) => {
                                var key_1 = 'key_1_' + index;
                                var key_2 = 'key_2_' + index;
                                return (
                                    <Carousel.Item  key={key_1} >
                                        <img className="d-block w-100" src={_data.src} style={ {'objectFit':'cover', 'width':'100%'} } srcSet={_data.srcset} alt="..." key={key_2} width="1920" height="700" />
                                        {/* <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                );
                            })}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Widget_HomeSliderBootstrap;