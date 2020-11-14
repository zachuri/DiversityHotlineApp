import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
           <h1>Check out our DIVERSITY Learning Center!</h1> 
           <div className="cards__container">
               <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/valve1.png'
                            text='Explore and learn more about diverse topics through Researh Article, Surveys, etc.'
                            label='Research and Resources'
                            path='/services'
                        />
                        <CardItem
                            src='images/valve2.png'
                            text='Professional Development Calendar and Topics surrounding the topics of Diversity, Equity, and Inclusion'
                            label='Development and Training'
                            path='/services'
                        />
                    </ul>
                        
                    <ul className='cards__items'>
                        <CardItem
                            src='images/valve3.png'
                            text='Chat with a mentor around specific and personal circumstances; includes Coaching Inquiry form, 24/7 Chat Box, etc.'
                            label='Coaching and Mentoring'
                            path='/services'
                        />
                        <CardItem
                            src='images/valve4.jpg'
                            text='Meet with a mentor either in person or online to discuss more serious situations related to Diversity, Equity, and Inclusion'
                            label='Mediation'
                            path='/about-us'
                        />
                    </ul>
               </div>
           </div>
        </div>
    )
}

export default Cards
