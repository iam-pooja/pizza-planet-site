import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
       <div className='contact'>
        <div className='leftSide' style={{backgroundImage : `url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-from'>
                <label>Full Name</label>
                <input name='name' placeholder='enter full name' type='text' />
                <label>Email</label>
                <input name='email'placeholder='enter your email' type='email' />
                <label>Message</label>
                <textarea rows='6' placeholder='enter message' required />
                <button>Send Message</button>
            </form>
        </div>
       </div>
    );
}

export default Contact;