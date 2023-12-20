import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p className='contact'>We would love to hear from you. Please feel free to contact us using the form below:</p>

        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
