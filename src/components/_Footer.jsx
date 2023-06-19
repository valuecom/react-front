import React from "react";
import { Link } from "react-router-dom";

const _Footer = (props) => {

    const menuNodesFooter = props.menuNodesFooter;

    return (
        <footer id="footer" className=" py-5 mt-auto hidden">
            <div className="container-xxl d-flex justify-content-end">
                <ul className="footer-menu m-0 p-0">
                    {menuNodesFooter.map((menuNode, index) => {
                        return (
                            <li className="" key={index} >
                                <Link className="" to={menuNode.uri} >{menuNode.label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
 
}

export default _Footer;