import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Card from '../Card/Card';
import './Page.css'

const Page = () => {
     const [items, setItems] = useState([])
     useEffect(()=> {
          fetch('fakeData.json')
          .then(res => res.json())
          .then(data => setItems(data))
     }, 
     [])
     return (
          <div className='page'>
               <div>
                    <div className='header-title'>
                         <div className='header-logo'>
                              <img src="../../../public/img/download.png" alt="" />
                              <h2> My Daily Excersis </h2>
                         </div>
                         <h4>Select today’s exercise</h4>
                    </div>
                    <div className='item-set'>
                    {
                         items.map(item => <Card key={item.id} item={item} > </Card>)
                    }
                    </div>
               </div>
               <div>
                    <About> </About>
               </div>
          </div>
     );
};

export default Page;