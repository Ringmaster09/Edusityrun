import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    
  <div 
  
className="contact">
  <h1>CONTACT US</h1>
  <h2>Get In Touch</h2>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li>Contact@priyansh</li>
          <li>+1 7668664586</li>
          <li>77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='enter your name' required/>
          <label>Phone Number</label>
          <input type="tel " name='phone' placeholder='enter your mobile number'  required/>   
             <label>write your message here</label>     
             <textarea name="message"  rows="6" placeholder='enter your message'></textarea>   
             <button type='submit' className= 'btn dark-btn'>Submit now</button>
             </form>
      </div>
    </div>
    
  );
};

export default Contact;
