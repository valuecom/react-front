import React, { Component } from "react";
import { Link } from "react-router-dom";

class _Footer extends Component {

    constructor(props) {
        super(props);
    }
    
    state = {  }

    render() { 
        return ( 
            <footer id="footer" className=" py-5 mt-auto">
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
}
 
export default _Footer;