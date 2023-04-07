import React from "react";
import { Link } from "react-router-dom";
import{
    Janssen_Tile_2,
    Finish_Tile,
    ezgif_com_gif_make,
    Ciroc_Tile,
    Don_Julio_Tile,
    Header_Banner_tile_emvolio,
    Header_Banner_tile_alpro,
    Header_Banner_tile_Jhonnie_Walker,
    JW_Header_Banner_Tile,
    Delta_Moms_tile,
    Oreo_Tile,
    FD_Tile_640x420_1,
    BD_NIKE_SEPOLIA_Tile_640x420_1,
    Allazoume_Sinitheies_Tile,
    Giannis_AllStar_Tile_640x420_1,
    EU_Memes_Tile_640x420_1,
    VF_Breaking_The_Glass_Tile_640x420_1
}  from "../assets";

import { AnimatePresence, motion } from "framer-motion";

const Page_WeDeliver = () => (  
    <>
        <section className="page-title-section">
            <div className="container-xxl">
                <div className="page-title-wrap my-5 px-5">
                    <h1 className="page-title fs-1 fw-normal text-center text-lg-start">We deliver</h1>
                    <p className="mt-5 text-center text-lg-start">Award-winning projects in a variety of categories & verticals :</p>
                </div>
            </div>
        </section>
        <section className="py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Janssen_Tile_2} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Janssen Greece</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Ready To Make A Difference</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Finish_Tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Reckitt Benckiser</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Finish, To Nero Einai Sta Xeria mas</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={ezgif_com_gif_make} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Public</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Public x Klarna</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Ciroc_Tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Diageo</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Cîroc campaign</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Don_Julio_Tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Diageo</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Don Julio campaign</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Header_Banner_tile_emvolio} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Greek Government</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Εθνική Εκστρατεία Εμβολιασμού</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Header_Banner_tile_alpro} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Danone</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Alpro</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Header_Banner_tile_Jhonnie_Walker} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Diageo</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Johnnie Walker 200 years celebration</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={JW_Header_Banner_Tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Diageo</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Johnnie Walker Campaign</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Delta_Moms_tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">DELTA</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Deltamoms.gr</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Oreo_Tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Mondelez</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Oreo</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={FD_Tile_640x420_1} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">Diageo</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">World className Fine Drinking Festival</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={BD_NIKE_SEPOLIA_Tile_640x420_1} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">NIKE</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">AntetokounBros</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Allazoume_Sinitheies_Tile} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">AB Vassilopoulos</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">#allazoumesinitheies</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={Giannis_AllStar_Tile_640x420_1} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">NIKE</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Antentokounmpo All Star Game</figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={EU_Memes_Tile_640x420_1} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">European Commission</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">EU memes</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure mb-5">
                            <Link to="/">
                                <div className="figure-img-wrap">
                                    <img src={VF_Breaking_The_Glass_Tile_640x420_1} className="figure-img img-fluid" alt="..." />
                                </div>
                                <figcaption className="figure-caption fw-medium">VODAFONE</figcaption>
                                <figcaption className="figure-caption fw-bold p-0">Breaking The Glass Ceiling</figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </>
);
 
export default Page_WeDeliver;