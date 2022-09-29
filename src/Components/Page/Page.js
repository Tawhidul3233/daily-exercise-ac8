import React, { useEffect, useState } from 'react';
import './Page.css'

const Page = () => {
     const [item, setItem] = useState([])
     useEffect(()=> {
          fetch('fakeData.json')
          .then(res => res.json())
          .then(data => console.log(data[0].img))
     }, 
     [])
     return (
          <div className='page'>
               <div>
                    <h1> actici </h1>
               </div>
               <div>
                   <h1> right </h1>
               </div>
          </div>
     );
};

export default Page;