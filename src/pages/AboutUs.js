import React from 'react'
import '../App.css'
import './AboutUs.css'
import CardItem from '../components/CardItem';
import '../components/Cards.css'
import './Team/profile.css'

export default function AboutUs() {
    return (

        <div>
            <div class="about-section">
                <div className="message">
                    <h1>"We are Real people diving into AUTHENTIC CONVERSATIONS... all of the time."</h1>
                </div>

                <br></br>

                <div className="content">
                    <h2>Vision</h2>
                    <p> Conversations around diversity equity, and inclusion can be very difficult. Our VISION is 
                        to create a dynamic, fluid and transdisciplinary platform for discussing issues surrounding diversity,
                        equity, and inclusion.
                    </p>
                </div>
                
                <div className="content">
                    <h2>Mission</h2>
                    <ol type="1">
                        <li>Deliver high quality <span>counseling</span> to individuals experiencing trauma as
                        a result of experiences that used their diversity against them.</li>
                        <li>Deliver high quality training to individuals desiring to create systemic changes, in diversity and
                            inclusion in high schools and colleges.
                        </li>
                        <li>Perform culturally sensitive evaluations for high schools and colleges interested in conducting a
                            diversity and inclusion audit.
                        </li>
                        <li>Deliver high quality, and objective mediation for indiviuals needing support in addressing issues of
                            diversity and inclusion at their school setting.
                        </li>
                    </ol>
                </div>
            </div>

            <div className='cards'>
            <h1>Our Team</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/josh.jpg'
                        text='Joshua Ma'
                        label='Founder'
                        path='/josh'
                        />
                        <CardItem
                        src='images/zack.jpg'
                        text='Zachary Punsalang'
                        label='Web Developer'
                        path='/zack'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/art.png'
                        text='Art Punsalang'
                        label='Web Developer'
                        path='/art'
                        />
                        <CardItem
                        src='images/franchesca.jpg'
                        text='Franchesca Lueng'
                        label='Web Developer'
                        path='/franchesca'
                        />
                        <CardItem
                        src='images/rex.jpg'
                        text='Xingchen Yang'
                        label='Web Developer'
                        path='/rex'
                        />
                    </ul>
                </div>
                </div>
            </div>

        </div>
    ) 
}