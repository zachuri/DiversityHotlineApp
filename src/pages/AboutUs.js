import React from 'react'
import '../App.css'
import CardItem from '../components/CardItem';
import '../components/Cards.css';



export default function AboutUs() {
    return (
    <div className='cards'>
        <h1 className='about-us'>We are REAL people diving into AUTHENTIC CONVERSATIONS... all of the time.</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src=''
                    text=''
                    label='Josh'
                    
                    />
                    </ul>

                    <ul className='cards__items'>
                    
                    <CardItem
                    src=''
                    text=''
                    label="Art"
                    />
                    

                  

                    
                    <CardItem
                    src=''
                    text=''
                    label="Zachary"
                    />
                    </ul>

                    <ul className='cards__items'>
                    <CardItem
                    src=''
                    text=''
                    label="Rex"
                    />     
                    

                    
                    <CardItem
                    src=''
                    text=''
                    label="Franchesca"
                    />     
                    </ul>
                
            </div>
        </div>
    </div>
    );
}


// function AboutUs() {
//     return (
//     <div className='cards'>
//         <h1>We are REAL people diving into AUTHENTIC CONVERSATIONS... all of the time.</h1>
//         <div className='cards__container'>
//             <div className='cards__wrapper'>
//                 <ul className='cards__items'>
//                     <CardItem
//                     src='images/coaching.png'
//                     text='Tell a mentor about your personal situation'
//                     label='Coaching'
//                     path='/coaching'
//                     />
//                     <CardItem
//                     src='images/mentoring.png'
//                     text='Talk to your mentor one on one'
//                     label='Mentoring'
//                     path='/mentoring'
//                     />
//                 </ul>
//             </div>
//         </div>
//     </div>
//     );
//   }
  
//   export default Valve3;