import React from 'react'
import '../../App.css'
import '../../components/Cards.css';
import CardItem from '../../components/CardItem';
import './Valve3.css'




function Valve3() {
    return (
    <div className='DiveTeam'>
        <h1>Dive Team</h1>
        

        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem
                src='images/coaching.png'
                text='Coaching'  
                path='/Coaching'
                
                />
                </ul>
                <ul className='cards__items'>
                <CardItem
                src='images/mentoring.png'
                text='Mentoring'
                path='/valve2'
                />
                </ul>
            </div>
        </div>
    </div>

    );


}
    
export default Valve3;


