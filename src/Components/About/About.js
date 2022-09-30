import React, { useState } from 'react';
import './About.css'



const About = (props) => {
     const {card} = props;
    
     let total = 0 ;
     for(const item of card){
          total = total + item.time;
     }



     const [times, setTimes] = useState(0)
     
     const addToBreak = (event) => {
          const time = event.target.innerText.slice(0,2);
          setTimes(time)
          console.log(time)

     }



     return (
         <div className='about-myself'>
           <div className='about'>
               <div className='about-me'>
                    <img src="./img/me.jpg" alt="" />
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
                         <button onClick={(event)=>addToBreak(event)} className='a-btn'>10m</button>
                         <button onClick={(event)=>addToBreak(event)}  className='a-btn'>15m</button>
                         <button onClick={(event)=>addToBreak(event)} className='a-btn'>20m</button>
                         <button onClick={(event)=>addToBreak(event)} className='a-btn'>25m</button>
                    </div>
               </div>
               <div className='exercise'>
                    <h3> Exercise Details </h3>
                    <div className='exercise-item'>
                         Exercise time :<span className=' total-time'> {total} </span> min
                    </div>
                    <div className='exercise-item'>
                         Break time :<span className='
                         break-time'>{times}</span> min
                    </div>
                    <div className='activites'>
                         <button className='button'>Acteivity Completed</button>
                    </div>
               </div>
          </div>
         </div>
     );
};

export default About;