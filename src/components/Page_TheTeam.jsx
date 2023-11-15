import React, { useRef, useLayoutEffect, useEffect } from "react";
import __GraphQL_Queries from "./__GraphQL_Queries";
import Widget_SimpleTitle from "./Widget_SimpleTitle";
import { useQuery, gql } from "@apollo/client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { logginF } from './__Utils';
import { Helmet } from "react-helmet-async";

const Page_TheTeam = (props) => {

    const nodeData = props.nodeData;

    useEffect(() => {
        document.body.classList.add('the-team');
        return () => {
          document.body.classList.remove('the-team');
        }
    }, [])

    const refBox = useRef();

    useLayoutEffect(() => {
        document.getElementById('footer').classList.remove('hidden');
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            for (let i=0;i<9;i++){
                let d = 0.05*(i%3);
                gsap.from(".box-"+i, {
                    scrollTrigger: {
                        trigger: ".box-"+i
                    },
                    delay: d,
                    transform: "translateY(50px)",
                    opacity:0,
                    duration:0.3
                });
            }

            // gsap.to(".box-4", {  scale:3 });
        }, refBox);
        return () => {
            document.getElementById('footer').classList.add('hidden');
            ctx.revert();
        }
    });

    const GET_FACES = gql`query GET_FACES
    {
      ${__GraphQL_Queries.queries.theTeam}
    }`;

    const { data, loading, error } = useQuery(GET_FACES);

    if (loading) { logginF('loading From Page_TheTeam'); return }
    if (error) { logginF('error From Page_TheTeam'); return }
    if (!data) { logginF('error From Page_TheTeam'); return }

    const nodeMoreData = data.theTeam;

    const card_array = [];
    for (const [key, value] of Object.entries(nodeMoreData.weHaveFacesExtras)) {
        // console.log(key);
        // console.log(value);
        if (value!= "Page_Wehavefacesextras")
            if(value.title!=null)
                card_array[card_array.length] = value;
    }



    // console.log(card_array);

    return (
        <>
            <Helmet>
                <title>The team | VALUECOM</title>
                <meta name="description" content="To make great work you need to create an environment that fosters greatness. A place where talented individuals are empowered to create and deliver their best." />
                <meta property="og:title" content={"The team | VALUECOM"} />
            </Helmet>
            <div ref={refBox} >
                <Widget_SimpleTitle widgetTitle={props.nodeData.title} />
                <section>
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12 the-team-cards d-grid px-md-5 px-xxl-0 pb-5">
                                {card_array.map( (card, index) => {
                                    return (
                                        <div key={index} className={"card box-" + index}>
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
            </div>
        </>
    );
}

export default Page_TheTeam;