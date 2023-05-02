import React from "react";
import { Link } from "react-router-dom";

const _Footer = () => {

    return (
        <footer id="footer" className=" py-5 mt-auto hidden">
            <div className="container-xxl d-flex justify-content-end">
                <ul className="m-0 p-0">
                    <li className="">
                        <Link to="/contact"> Contact us</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );

}

export default _Footer;