import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
    return (
      <div className='about'>
        <div className='aboutTop' style={{backgroundImage : `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
             The key to progress is much similar to the key to improving a pizza – the more you put into it, 
             the more you receive in return.
             Our pizza family is as eager for flawlessness today as we were the point at which we originally 
             opened our entryways over 20 years back. Also, we’re headed to be the best at making creative new items and formulas.<br/><br/>

             We don’t utilize shabby and increasingly prepared fixings. Regardless of whether it’s our mark 
             sauce, fixings, our unique new mixture, or even the case itself, we put resources into our 
             fixings to guarantee that we generally give you the best quality pizza.

             For you, it’s not only a superior pizza. It’s a family assembling, important birthday,
             work festivity or basically an incredible supper. It’s our objective to ensure you generally 
             have the best elements for each event.
             </p>
        </div>
      </div>
    );
}

export default About;