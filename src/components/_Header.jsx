import React  from "react";
import { Link } from "react-router-dom";
// import { logo } from "../assets";
import preloadImage from "./__Utils";


const _Header = (props) =>  {

    const menuNodes = props.menuNodes;
    const preloadingArray = props.preloadingArray;

    const handleNavClick = () => {
        document.getElementById('navbarNav').classList.toggle("collapse");
        document.getElementById('navbar-toggler').classList.toggle("open");
    }
    const handleNavItemClick = () => {
        document.getElementById('navbarNav').classList.toggle("collapse");
        // document.getElementById('navbar-toggler').classList.toggle("open");
    }

    return (
        <header className="d-flex align-items-center">
            <div className="container-xxl ">
                <div className="row align-items-center">
                    <div className="col-6 col-lg-2">
                        <div className="logo-wrap">
                            <Link to="/">
                                <img src={"https://newsite2023.valuecom.gr/images/logo.png"} alt="Valuecom" width="204" height="49" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-10">
                        <nav className="navbar navbar-expand-lg justify-content-end">
                            <div className="hidden2" id="header-nav">
                                <button onClick={handleNavClick} id="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav fw-medium">
                                        {menuNodes.map((menuNode, index) => {
                                            return (
                                                <li onClick={handleNavClick} className="nav-item " key={index} onMouseEnter={ () => preloadImage(preloadingArray[menuNode.uri]) }>
                                                    <Link className="nav-link" to={menuNode.uri} >{menuNode.label}</Link>
                                                </li>
                                            );
                                        })}
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
export default _Header;