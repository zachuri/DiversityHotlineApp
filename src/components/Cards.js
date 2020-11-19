
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our DIVERSITY Learning Center!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/valve1.png'
              text='Research and Resources'
              label='Open Waters'
              path='/services'
            />
            <CardItem
              src='images/valve2.png'
              text='Professional Development and Training'
              label='System Check'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/valve3.png'
              text='Coaching and Mentoring'
              label='Dive Team'
              path='/services'
            />
            <CardItem
              src='images/valve4.jpg'
              text='Mediation Meatings for more serious situations related to Diversity'
              label='Deep Dive Into Murky Waters'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;