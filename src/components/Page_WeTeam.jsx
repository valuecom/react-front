import React from "react";
import { Link } from "react-router-dom";
import{
    valuecom_team, 

   
}  from "../assets";

const Page_WeTeam = () => (  
    <>
        <section className="page-title-section">
            <div className="container-xxl">
                <div className="page-title-wrap my-5 px-5">
                    <h1 className="page-title fs-1 fw-normal text-center text-lg-start">We team</h1>
                </div>
            </div>
        </section>
        <section>
            <div className="container-xxl d-flex justify-content-center pb-5">
                <img src={valuecom_team} />
            </div>
        </section>
        <section>
            <div className="container-xxl pb-5 px-5">
                <div className="px-md-5 mx-lg-5">
                    <p>We strive to make VALUECOM a top working environment.</p>
                    <p>Fair, transparent and just to our stakeholders, we:</p>
                    <ul>
                        <li>Offer clear career paths & work opportunities</li>
                        <li>Appraise fairly & justly</li>
                        <li>Value teamwork and equal opportunity</li>
                        <li>Respect hard work, perseverance & focus Strive for creativity & constancy</li>
                        <li>Believe in diversity & nurture individuality</li>
                        <li>Help the team become better with business coaching programs and workshops</li>
                        <li>Support remote working</li>
                    </ul>
                    <p>We are always in the lookout for top talent that shares our vision, values and objectives. If you resonate with the VALUECOM pov, we would be very happy to get to know you.</p>
                    <p>Learn more about current <Link to="https://valuecom.bamboohr.com/jobs/view.html?id=25" target="_blank">openings</Link>.</p>
                </div>
            </div>
        </section>
    </>
);
 
export default Page_WeTeam;