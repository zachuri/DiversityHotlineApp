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
              path='/valve1'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/valve2.png'
              text='Professional Development and Training'
              label='System Check'
              path='/valve2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/valve3.png'
              text='Coaching and Mentoring'
              label='Dive Team'
              path='/valve3'

              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/valve4.jpg'
              text='Mediation Meetings'
              label='Deep Dive Into Murky Waters'
              path='/valve4'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;