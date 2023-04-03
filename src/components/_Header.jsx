import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

class _Header extends Component {

    constructor(props) {
        super(props);
    }

    state = {  }

    render() { 
        return (  
            <header className="d-flex align-items-center">
                <div className="container-xxl ">
                    <div className="row align-items-center">
                        <div className="col-6 col-lg-2">
                            <div className="logo-wrap">
                                <Link to="/">
                                    <img src={logo} alt="Valuecom" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 col-lg-10">
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <div className="">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav fw-medium">
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/we-are-trusted">Clients</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Work</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/we-believe">Culture</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/the-team">The team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/valuecom-team">Careers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact-us">Contact</Link>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default _Header;