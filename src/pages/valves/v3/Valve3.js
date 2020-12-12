import React from 'react'
import '../../../App.css'
import CardItem from '../../../components/CardItem';
import '../../../components/Cards.css';

function Valve3() {
    return (
    <div className='cards'>
        <h1>Dive Team!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/coaching.png'
                    text='Tell a mentor about your personal situation'
                    label='Coaching'
                    path='/coaching'
                    />
                    <CardItem
                    src='images/mentoring.png'
                    text='Talk to your mentor one on one'
                    label='Mentoring'
                    path='/mentoring'
                    />
                </ul>
            </div>
        </div>
    </div>
    );
  }
  
  export default Valve3;