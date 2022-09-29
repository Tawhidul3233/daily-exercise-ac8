import React from 'react';
import './About.css'

const About = () => {
     return (
          <div className='about'>
               <div className='about-me'>
                    <img src="../../../public/img/me.jpg" alt="" />
                    <div className='about-name'>
                         <h3>Ti Rony</h3>
                         <p>Patuakhali, Bangladesh</p>
                    </div>
               </div>
          </div>
     );
};

export default About;