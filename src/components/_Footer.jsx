import React from "react";
import { Link } from "react-router-dom";

const _Footer = () => {

    return (
        <footer id="footer" className=" py-5 mt-auto hidden">
            <div className="container-xxl d-flex justify-content-end">
                <ul className="footer-menu m-0 p-0">
                    <li className="">
                        <Link to="/terms"> Terms</Link>
                    </li>
                    <li className="text-light"> <span>|</span> </li>
                    <li className="">
                        <Link to="/creative-reviews"> Creative Reviews</Link>
                    </li>
                    <li className="text-light"> <span>|</span> </li>
                    <li className="">
                        <Link to="/contact"> Contact us</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );

}

export default _Footer;