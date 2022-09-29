import React from 'react';
import './About.css'

const About = () => {
     return (
         <div className='about-myself'>
           <div className='about'>
               <div className='about-me'>
                    <img src="../../../public/img/me.jpg" alt="" />
                    <div className='about-name'>
                         <h3>Ti Rony</h3>
                         <p>Patuakhali, Bangladesh</p>
                    </div>
               </div>
               <div className='my-info'>
                    <div>
                         <h4>60 <span>kg</span></h4>
                         <p>Weight</p>
                    </div>
                    <div>
                         <h4>6.0 <span>ft</span></h4>
                         <p>Height</p>
                    </div>
                    <div>
                         <h4>22 <span>yr</span></h4>
                         <p>Age</p>
                    </div>
               </div>
               <div className='break'>
                    <h3> Add A Break </h3>
                    <div className='all-btn'>
                         <button className='a-btn'> 10m </button>
                         <button className='a-btn'> 15m </button>
                         <button className='a-btn'> 20m </button>
                         <button className='a-btn'> 25m </button>
                         
                    </div>
               </div>
               <div className='exercise'>
                    <h3> Exercise Details </h3>
                    <div className='exercise-item'>
                         Exercise time : 
                    </div>
                    <div className='exercise-item'>
                         Break time :
                    </div>
                    <div>
                         <button className='button'>Activity Completed</button>
                    </div>
               </div>
          </div>
         </div>
     );
};

export default About;