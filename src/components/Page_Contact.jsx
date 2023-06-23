import React, {  useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import Widget_SimpleTitle from "./Widget_SimpleTitle";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";
import { useLazyQuery, gql } from "@apollo/client";
import { logginF } from './__Utils';
import __GraphQL_Queries from "./__GraphQL_Queries";
// import ScrollTrigger from "gsap/ScrollTrigger";

let reCAPTCHA_site_key = process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY; // site key - google recaptcha

const Page_Contact = (props) => {

    const nodeData = props.nodeData;

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

 
    const SEND_EMAIL = gql`query SEND_EMAIL($form_name: String, $form_email: String, $form_message: String, $form_google_token: String){
        ${__GraphQL_Queries.queries.emailSent}
    } `;

    const [contactSubmit, { data, loading, error }] = useLazyQuery(SEND_EMAIL,{
        fetchPolicy: 'no-cache', // Doesn't check cache before making a network request
    });

    if (loading) { logginF('loading From Page_Contact'); return }
    if (error) { logginF('error From Page_Contact'); return }
    // if (data) { alert(123); return; }
    let data_json;
    if (data) {
        data_json = JSON.parse(data.emailSent);
        // console.log( JSON.parse(data.emailSent) );
    } 
    // if (!data) { logginF('!data From Page_Contact'); return }

    const handleContactSubmit = (e) => {
        e.preventDefault();
 
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

                if (!doSubmit) return false;

                const data_vars = {
                    'form_name': form_name,
                    'form_email': form_email,
                    'form_message': form_message,
                    'form_google_token': form_google_token,
                } ;

                
                contactSubmit({ variables: data_vars });

                // let json_url = process.env.REACT_APP_CONTACT_URL;

                // fetch(json_url,{
                //     method: "POST", // *GET, POST, PUT, DELETE, etc.
                //     mode: "cors", // no-cors, *cors, same-origin
                //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                //     credentials: "same-origin", // include, *same-origin, omit
                //     headers: {
                //       "Content-Type": "application/json",
                //       // 'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                //     redirect: "follow", // manual, *follow, error
                //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                //     body: JSON.stringify(data), // body data type must match "Content-Type" header
                // })
                // .then(response => {
                //     return response.json();
                // }).then(result => {
                //     // console.log(result);
                //     if (result.status==200){
                //         document.getElementById('form_name').value='';
                //         document.getElementById('form_email').value='';
                //         document.getElementById('form_message').value='';
                //         document.getElementById('contact-msg-error').innerHTML = '';
                //         document.getElementById('contact-msg').innerHTML = result.message;
                //         setTimeout(function(){
                //             document.getElementById('contact-msg').innerHTML = '';
                //         }, 4000);
                //     }else{
                //         document.getElementById('contact-msg').innerHTML = '';
                //         document.getElementById('contact-msg-error').innerHTML = result.message;
                //     }
                // })
                // .catch(error => {
                //     // console.log(error);
                // });
 
            });

        });

        return false;



    }

    return (
        <>
            <Helmet>
              <title>Contact | VALUECOM</title>
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
                            <input style={{'backgroundColor': "#FDDD31", 'color': "#1D1D1D", 'fontWeight':"600"}} type="submit" value="Send"  />
                            <div id="contact-msg" className="contact-msg" >{data && data_json.status==200 ?  data_json.message: '' }</div>
                            <div id="contact-msg-error" className="contact-msg-error" >{data && data_json.status==304 ?  data_json.message: '' }</div>
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