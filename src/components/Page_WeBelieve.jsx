import React from "react";
import{
    we_believe_2,
}  from "../assets";
import { AnimatePresence, motion } from "framer-motion";

const Page_WeBelieve = () => (  
    <>
        <section className="page-title-section">
            <div className="container-xxl">
                <div className="page-title-wrap my-5 px-5">
                    <h1 className="page-title fs-1 fw-normal text-center text-lg-start">We believe</h1>
                </div>
            </div>
        </section>
        <section>
            <div className="container-xxl d-flex justify-content-center pb-5">
                <img src={we_believe_2} />
            </div>
        </section>
        <section>
            <div className="container-xxl pb-5 px-5">
                <div className="px-md-5 mx-lg-5">
                    <p>To make great work you need to create an environment that fosters greatness. A place where talented individuals are empowered to create and deliver their best.</p>
                    <p>We constantly strive to make VALUECOM this sort of place. How? Through our culture! Our way of work is "excellence" - excellence means we give it our best, our finest shot. Our effort is focused, consistent, resilient, intelligent, thoughtful & passionate.</p>
                    <p>We work with respect & integrity, transparency & accountability. We believe in team effort & invest in making our team better. We believe in hard work and a healthy, balanced lifestyle.</p>
                </div>
            </div>
        </section>
    </>
);

export default Page_WeBelieve;