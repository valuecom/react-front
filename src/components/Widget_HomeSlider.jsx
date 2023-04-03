import React, { Component } from "react";
import Slider from "react-slick";

import {     
    ermis_gold,
    fullstack_marketing,
    digital_dissraption_sessions 
} from "../assets";

class Widget_HomeSlider extends Component {
 

    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 

        var settings = {
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
                <div className="container-fluid px-0">
                    <div className="slider">
                        <Slider {...settings} className="home-slider">
                            <div className="single-item single-item-1"><img className="img-fluid" style={ {'objectFit':'cover', 'width':'100%'} } src={ermis_gold} alt="" /></div>
                            <div className="single-item"><img className="img-fluid" style={ {'objectFit':'cover', 'width':'100%'} } src={fullstack_marketing} alt="" /></div>
                            <div className="single-item"><img className="img-fluid" style={ {'objectFit':'cover', 'width':'100%'} } src={digital_dissraption_sessions} alt="" /></div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Widget_HomeSlider;