import React from 'react';
import './Question.css'

const Question = () => {
     return (
          <div className='question'>
               <h2> All Question Answer </h2>
               <div>
                    <h3>1. How does react work ?</h3>
                    <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    </p>
               </div>
               <div>
                    <h3> 2. Difference between state and props ?</h3>
                    <p> State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </p>
               </div>
               <div>
                    <h3> 3. How does react work</h3>
                    <p>It's working, and for the simple reason that useEffect lets you perform your effect once the component has finished rendering. And because useEffect is directly within the component, you have direct access to your state, variables, and props. Can useEffect be async?
                    Either way, we're now safe to use async functions inside useEffect hooks. Now if/when you                     want to return a cleanup function, it will get called and we also keep useEffect nice and                     clean and free from race conditions. Enjoy using async functions with React's useEffect from                  here on out!
                    </p>
               </div>
          </div>
     );
};

export default Question;