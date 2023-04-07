import React from "react";
import { Link } from "react-router-dom";
 
import { AnimatePresence, motion } from "framer-motion";

const Page_Contact = (props) => { 

    const nodeData = props.nodeData;

    return (
        <main className="page">
            <section className="page-title-section">
                <div className="container-xxl">
                    <div className="page-title-wrap my-5 px-5">
                        <h1 className="page-title fs-1 fw-normal text-center text-lg-start">{nodeData.title} - {nodeData.databaseId}</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-xxl w-50 px-5 pb-5">
                    <div className="contact-form-wrap py-5">
                        <h3 style={{'fontWeight': '400'}}>Get in touch with us</h3>
                        <form action="#" method="post">
                            <input type="text" id="name" name="name" placeholder="Name" />
                            <input type="email" id="email" name="email" placeholder="Email" />
                            <textarea id="message" name="message" placeholder="Message" style={{'height':"200px"}} ></textarea>
                            <input style={{'backgroundColor': "#FDDD31", 'color': "#1D1D1D", 'fontWeight':"600"}} type="submit" value="Send" />
                        </form>
                    </div>
                    <hr />
                    <div className="contact-info-wrap py-5">
                        <p style={{'color':"#757575"}} >6 AG. GEORGIOU KARITSI SQR. 10561<br />
                            ATHENS,GREECE<br />
                            <Link to="tel:+30 210 3252103">+30 210 3252103</Link><br />
                            email: <Link to="mailto:admin@valuecom.gr">admin@valuecom.gr</Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page_Contact;