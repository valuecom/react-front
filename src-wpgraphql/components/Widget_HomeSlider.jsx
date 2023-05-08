import React, { Component } from "react";
import Slider from "react-slick";

// class Widget_HomeSlider extends Component {
const Widget_HomeSlider = (props) => {
 
    // console.log(props);
    const img_arr = props.images;
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

    return (
        <section className="slider-section mb-5">
            <div className="container-fluid px-0" >
                <div className="slider" >
                    <Slider {...settings} className="home-slider">
                            {img_arr.map( (_src, index) => {
                                var key_1 = 'key_1_' + index;
                                var key_2 = 'key_2_' + index;
                                return (
                                    <div className={"single-item"}  key={key_1} >
                                        <img className="img-fluid" key={key_2} style={ {'objectFit':'cover', 'width':'100%'} } src={_src} alt="" width="1920" height="700" />
                                    </div>
                                );
                            })}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Widget_HomeSlider;