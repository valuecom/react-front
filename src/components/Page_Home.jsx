import React from "react";
import { Link } from "react-router-dom";
import { 
    we_do_fullStack_marketing,
    we_are_storytellers,
    we_dream,
    we_are_trusted,
    we_deliver,
    we_believe,
    we_study_and_research,
    we_have_faces,
    we_team
} from "../assets";


const Page_Home = () => (
    <>
        <section className="py-3">
            <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_do_fullStack_marketing} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We do FullStack Marketing</figcaption>
                    </Link>
                </figure>
                </div>
                <div className="col-3">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_are_storytellers} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We are storytellers</figcaption>
                    </Link>
                </figure>
                </div>
                <div className="col-3">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_dream} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We dream</figcaption>
                    </Link>
                </figure>
                </div>
            </div>
            </div>
        </section>
        <section className="py-3">
            <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_are_trusted} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We are trusted</figcaption>
                    </Link>
                </figure>
                </div>
                <div className="col-3">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_deliver} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We deliver</figcaption>
                    </Link>
                </figure>
                </div>
                <div className="col-6">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_believe} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We believe</figcaption>
                    </Link>
                </figure>
                </div>
            </div>
            </div>
        </section>
        <section className="py-3 mb-5">
            <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_study_and_research} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We study and research</figcaption>
                    </Link>
                </figure>
                </div>
                <div className="col-3">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_have_faces} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We have faces</figcaption>
                    </Link>
                </figure>
                </div>
                <div className="col-3">
                <figure className="figure">
                    <Link to="#" >
                    <div className="figure-img-wrap">
                        <img src={we_team} className="figure-img img-fluid" alt="..." />
                    </div>
                    <figcaption className="figure-caption fw-medium fs-5">We team</figcaption>
                    </Link>
                </figure>
                </div>
            </div>
            </div>
        </section>
    </>
)
 
export default Page_Home;