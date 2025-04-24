import React, { use, useState} from "react";

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault
    }

    return(
        <div className="contact">
            <h2>Contact Form</h2>
            
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                
                <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                
                <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                />
                
                <button type="submit">Send</button>
            </form>
     </div>       
    )
} 

export default Contact
