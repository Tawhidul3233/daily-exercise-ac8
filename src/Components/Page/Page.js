import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Card from '../Card/Card';
import Question from '../Question/Question';
import './Page.css'

const Page = () => {
     const [items, setItems] = useState([])
     const [card, setCard] = useState([])
     


     useEffect(()=> {
          fetch('fakeData.json')
          .then(res => res.json())
          .then(data => setItems(data))
     }, 
     []);



const addToList = (item) => {
     const newCard = [...card, item]
     setCard(newCard)
}


     return (
          <div>
               <div className='page'>
                    <div>
                         <div className='header-title'>
                              <div className='header-logo'>
                                   <img src="img/header.png" alt="" />
                                   <h2> My Daily exercise </h2>
                              </div>
                              <h4>Select today’s exercise</h4>
                         </div>
                         <div className='item-set'>
                              {
                              items.map(item => <Card addToList={addToList} key={item.id} item={item} > </Card>)
                              }
                         </div>
                    </div>
                    <div >
                         <About card={card}> </About>
                    </div>
               </div>
               <div>
                    <Question> </Question>
               </div>
          </div>
     );
};

export default Page;