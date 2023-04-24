import React from "react";
import { Link } from "react-router-dom";
import Widget_SimpleTitle from "./Widget_SimpleTitle";


// mutation SEND_EMAIL {
// 	sendEmail(
// 			input: {
// 				to: "test@test.com"
// 				from: "test@test.com"
// 				subject: "test email"
// 				body: "test email"
// 				clientMutationId: "test"
// 			}
//   ) {
// 					origin
// 					sent
// 					message
// 				}
// }

// not good
// need to use wordpress to validate data before sending email


const Page_Contact = (props) => {

    const nodeData = props.nodeData;
    const handleContactSubmit = (e) => {
        e.preventDefault();

        let form_name = document.getElementById('form_name').value;
        let form_email = document.getElementById('form_email').value;
        let form_message = document.getElementById('form_message').value;

        let doSubmit = true;
        if ( !validateName(form_name) ) doSubmit = false;

        console.log(doSubmit);
        console.log('handleContactSubmit');
        console.log(form_name, form_email, form_message);

    }

    return (
        <main className="page">
            <Widget_SimpleTitle widgetTitle={nodeData.title} />
            <section>
                <div className="container-xxl w-50 px-5 pb-5">
                    <div className="contact-form-wrap py-5">
                        <h3 style={{'fontWeight': '400'}}>Get in touch with us</h3>
                        <form action="#" method="post" onSubmit={handleContactSubmit}>
                            <input type="text" id="form_name" name="name" placeholder="Name" />
                            <input type="email" id="form_email" name="email" placeholder="Email" />
                            <textarea id="form_message" name="message" placeholder="Message" style={{'height':"200px"}} ></textarea>
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

const validateName = (v) => {
    return true;
}




export default Page_Contact;