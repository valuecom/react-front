import React, {  useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import Widget_SimpleTitle from "./Widget_SimpleTitle";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";
import {  gql, useApolloClient  } from "@apollo/client";
import { logginF } from './__Utils';
import __GraphQL_Queries from "./__GraphQL_Queries";
// import ScrollTrigger from "gsap/ScrollTrigger";

let reCAPTCHA_site_key = process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY; // site key - google recaptcha

const Page_Contact = (props) => {

    const nodeData = props.nodeData;

    // use later in button action
    const client = useApolloClient();

    const handleLoadedScript = _ => {
        // console.log('script google recaptcha loaded!');
    }
 
    
    useEffect( () => {
        document.body.classList.add('contact-us');

        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/api.js?render=" + reCAPTCHA_site_key;
        script.id = "g-rec";
        script.addEventListener("load", handleLoadedScript)
        document.body.appendChild(script);

        // clean up after unload
        return () => {
            document.body.classList.remove('contact-us');
        }
    });

    const refBox = useRef();

    useLayoutEffect(() => {
        document.getElementById('footer').classList.remove('hidden');
        const ctx = gsap.context(() => {
            gsap.from(refBox.current, {
                transform: "translateY(50px)",
                duration:0.3
            });
        }, refBox);
        return () => { 
            document.getElementById('footer').classList.add('hidden');
            document.getElementById('g-rec').remove();
            if (document.getElementsByClassName('grecaptcha-badge')[0]) {
                document.getElementsByClassName('grecaptcha-badge')[0].remove();
            }else{
                setTimeout(function(){
                    if (document.getElementsByClassName('grecaptcha-badge')[0]) {
                        document.getElementsByClassName('grecaptcha-badge')[0].remove();
                    }
                },1200)
            }
            ctx.revert();
        }
    });

 



    const handleContactSubmit = (e) => {
        e.preventDefault();
        document.getElementById('contact_submit').disabled=true;
        logginF('button pressed');

        window.grecaptcha.ready(_ => {
        window.grecaptcha
            .execute(reCAPTCHA_site_key, { action: "submitContact" })
            .then(token => {

                let form_name = document.getElementById('form_name').value;
                let form_email = document.getElementById('form_email').value;
                let form_message = document.getElementById('form_message').value;
                let form_google_token = token;

                let doSubmit = true;
                if ( !validateName(form_name) ) {
                    // form_name
                    document.getElementById("form_name").classList.add("input-error");
                    doSubmit = false;
                }

                // form_email html validation
                // form_message html validation

                if (!doSubmit){
                    document.getElementById('contact_submit').disabled=false;
                    return false;
                } 

                const data_vars = {
                    'form_name': form_name,
                    'form_email': form_email,
                    'form_message': form_message,
                    'form_google_token': form_google_token,
                } ;

                const SEND_EMAIL = gql`query SEND_EMAIL($form_name: String, $form_email: String, $form_message: String, $form_google_token: String){
                    ${__GraphQL_Queries.queries.emailSent}
                } `;

                client.query({
                    fetchPolicy: 'network-only',
                    query: SEND_EMAIL,
                    variables: data_vars
                }).then(result_data => {
                    document.getElementById('contact_submit').disabled=false;
                    var result = JSON.parse(result_data.data.emailSent);
                    if (result.status==200){
                        document.getElementById('form_name').value='';
                        document.getElementById('form_email').value='';
                        document.getElementById('form_message').value='';
                        document.getElementById('contact-msg-error').innerHTML = '';
                        document.getElementById('contact-msg').innerHTML = result.message;
                        setTimeout(function(){
                            document.getElementById('contact-msg').innerHTML = '';
                        }, 5000);

                        document.getElementById("form_name").classList.remove("input-error");
                        // document.getElementById("form_email").classList.remove("input-error");
                        // document.getElementById("form_message").classList.remove("input-error");

                    }else{
                        document.getElementById('contact-msg').innerHTML = '';
                        document.getElementById('contact-msg-error').innerHTML = result.message;
                    }
                })
                .catch(error => {
                    document.getElementById('contact-msg').innerHTML = '';
                    document.getElementById('contact-msg-error').innerHTML = 'There was an error!';
                    document.getElementById('contact_submit').disabled=false;
                    logginF(error);
                });
 
            });

        });

        return false;



    }

    return (
        <>
            <Helmet>
              <title>Contact | VALUECOM</title>
              <meta
                name="description"
                content="We constantly strive to make VALUECOM this sort of place. How? Through our culture! Our way of work is “excellence” – excellence means we give it our best."
              />
              <meta property="og:title" content={"Contact | VALUECOM"} />
            </Helmet>
            <Widget_SimpleTitle widgetTitle={nodeData.title} />
            <section ref={refBox} >
                <div className="container-xxl col-lg-6 px-md-5 pb-5">
                    <div className="contact-form-wrap py-5">
                        <h3 style={{'fontWeight': '400'}}>Get in touch with us</h3>
                        <form action="#" method="post" onSubmit={handleContactSubmit} >
                            <input type="text" id="form_name" name="name" placeholder="Name" required maxLength="100" />
                            <input type="email" id="form_email" name="email" placeholder="Email"  required />
                            <textarea id="form_message" name="message" placeholder="Message" style={{'height':"200px"}}  required maxLength="2000"  ></textarea>
                            <input id="contact_submit" style={{'backgroundColor': "#FDDD31", 'color': "#1D1D1D", 'fontWeight':"600"}} type="submit" value="Send"  />
                            <div id="contact-msg" className="contact-msg" ></div>
                            <div id="contact-msg-error" className="contact-msg-error" ></div>
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
        </>
    )
}

const validateName = (val) => {
    var reg =  /^[αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩςάέύίόώήϊϋa-zA-Z ]+$/;
    return reg.test(val);
}




export default Page_Contact;