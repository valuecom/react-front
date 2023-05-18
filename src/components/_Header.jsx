import React  from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

 


const _Header = (props) =>  {
    
    const menuNodes = props.menuNodes;

    const handleNavClick = () => {
        document.getElementById('navbarNav').classList.toggle("collapse");
    }
    
    return (
        <header className="d-flex align-items-center">
            <div className="container-xxl ">
                <div className="row align-items-center">
                    <div className="col-6 col-lg-2">
                        <div className="logo-wrap">
                            <Link to="/">
                                <img src={logo} alt="Valuecom" width="196" height="46" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-10">
                        <nav className="navbar navbar-expand-lg justify-content-end">
                            <div className="hidden" id="header-nav">
                                <button onClick={handleNavClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav fw-medium">
                                        {menuNodes.map((menuNode, index) => {
                                            return (
                                                <li className="nav-item " key={index}>
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