import React from 'react';
import './Card.css'

const Card = ( props ) => {
     const {addToList,item} = props;
const {name, img, time, age, body}= item ;
     return (
          <div className='card'>
               <img src={img} alt="" />
               <div className='card-body'>
                    <h2> {name} </h2>
                    <p> {body.slice(0, 120)}... </p>
                    <h5>For Age : {age} </h5>
                    <h5>Time required :  {time}m</h5>
                    <button onClick={()=> addToList(item)}  className='button'> Add to list </button>
               </div>
          </div>
     )
};

export default Card;