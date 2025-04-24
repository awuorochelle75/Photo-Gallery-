import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import "../component css/Contact.css"
import NavBar from "./NavBar";

function Contact(){
    const [state, handleSubmit] = useForm('xjkwvlrg'); 

    return(
    <section>
        <div className="NavBar">  <NavBar /></div>
        <div className="contact">
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name
            <input id="name"
                   type="text"
                   name="name"
                   placeholder="Your Name"/>
             <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors} /></label>
            
            <label htmlFor="email">Email
            <input id="email"
                   type="email"
                   name="email"
                   placeholder="Your Email"/>
             <ValidationError 
                  prefix="email" 
                  field="email"
                  errors={state.errors} /></label>


            <label htmlFor="message">Message
            <input id="message"
                   type="message"
                   name="message"
                   placeholder="Your Message"/>
             <ValidationError 
                  prefix="message" 
                  field="message"
                  errors={state.errors} /></label>
                
              
                
                <button type="submit" disabled={state.submitting} >
                    {state.submitting ? 'Sending...' : 'Send'}
                    </button>

                    {state.succeeded && (<p className="success-message">
                    Message sent successfully! We'll respond shortly. </p>
                    )}
            </form>
        </div>
        <div className="contact-title-section">
            <h1 className="contact-title">Contact Us</h1>
        </div>
     </div> 
    </section>   
    )
} 

export default Contact
