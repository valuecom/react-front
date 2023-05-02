import React  from "react";
 
import { Link } from "react-router-dom";
import { logo } from "../assets";

import { useQuery, gql } from "@apollo/client";

 const GET_MENU_BY_NAME_QUERY = gql`{
      menuItems(where: {location: PRIMARY})  {
        nodes {
          connectedObject {
            __typename ... on Page {
              title
              databaseId
            } 
          }
          id
          uri
          description
          label
        }
      }
    }
 
`;

const _Header = () =>  {
 
    const { data, loading, error } = useQuery(GET_MENU_BY_NAME_QUERY);

    if (loading) { console.log('loading _Header'); return }
    if (error) { console.log('error _Header'); return }
    if (!data) { console.log('!data _Header'); return }

    const menuNodes = data.menuItems.nodes;
    // console.log(menuNodes);

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
                            <div className="">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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