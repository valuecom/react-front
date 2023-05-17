import React from "react";
import __GraphQL_Queries from "./__GraphQL_Queries";
import Widget_SimpleTitle from "./Widget_SimpleTitle";
import { useQuery, gql } from "@apollo/client";



const Page_TheTeam = (props) => {

    const nodeData = props.nodeData;

    const GET_FACES = gql`query GET_FACES
    {
      ${__GraphQL_Queries.queries.theTeam}
    }`;

    const { data, loading, error } = useQuery(GET_FACES);

    if (loading) { console.log('loading From Page_TheTeam'); return }
    if (error) { console.log('error From Page_TheTeam'); return }
    if (!data) { console.log('!data From Page_TheTeam'); return }

    const nodeMoreData = data.theTeam;

    const card_array = [];
    for (const [key, value] of Object.entries(nodeMoreData.weHaveFacesExtras)) {
        // console.log(key);
        // console.log(value);
        if (value!= "Page_Wehavefacesextras")
          card_array[card_array.length] = value;
    }



    console.log(card_array);

    return (  
        <>
            <Widget_SimpleTitle widgetTitle={props.nodeData.title} />
            <section>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 the-team-cards d-grid px-md-5 px-xxl-0 pb-5">
                            {card_array.map( (card, index) => {
                                return (
                                    <div key={index} className="card">
                                        <img src={card.thumb.sourceUrl} className="card-img-top" alt="..." width="413" height="275" />
                                        <div className="card-body">
                                            <h5 className="card-title">{card.title}</h5>
                                            <p className="card-text">{card.subTitle}</p>
                                            <hr />
                                            <div dangerouslySetInnerHTML={{__html:card.text}} ></div>
                                        </div>
                                    </div>  
                                );
                            })}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
 
export default Page_TheTeam;